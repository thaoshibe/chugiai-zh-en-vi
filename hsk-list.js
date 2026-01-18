// HSK Word List Display Script
// Loads HSK vocabulary data and displays it organized by level

let hskData = {};
let fullDictionary = {};
let charDictionary = {};
let fullDictionaryVN = {};
let charDictionaryVN = {};
let allHSKWords = [];
let isRandomMode = false;

// Convert pinyin numbers to tone marks
function pinyinNumbersToTones(pinyin) {
    if (!pinyin) return pinyin;
    
    const toneMarks = {
        'a': ['ā', 'á', 'ǎ', 'à', 'a'],
        'e': ['ē', 'é', 'ě', 'è', 'e'],
        'i': ['ī', 'í', 'ǐ', 'ì', 'i'],
        'o': ['ō', 'ó', 'ǒ', 'ò', 'o'],
        'u': ['ū', 'ú', 'ǔ', 'ù', 'u'],
        'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü'],
        'v': ['ǖ', 'ǘ', 'ǚ', 'ǜ', 'v']
    };
    
    return pinyin.split(' ').map(syllable => {
        const match = syllable.match(/^([a-zü:]+)([1-5])$/i);
        if (!match) return syllable;
        
        let [_, letters, tone] = match;
        letters = letters.replace(/u:/g, 'ü');
        tone = parseInt(tone);
        
        let modified = false;
        
        if (letters.includes('a')) {
            letters = letters.replace('a', toneMarks['a'][tone - 1]);
            modified = true;
        } else if (letters.includes('e')) {
            letters = letters.replace('e', toneMarks['e'][tone - 1]);
            modified = true;
        } else if (letters.includes('ou')) {
            letters = letters.replace('o', toneMarks['o'][tone - 1]);
            modified = true;
        } else {
            for (let i = letters.length - 1; i >= 0; i--) {
                const char = letters[i];
                if (toneMarks[char]) {
                    letters = letters.substring(0, i) + toneMarks[char][tone - 1] + letters.substring(i + 1);
                    modified = true;
                    break;
                }
            }
        }
        
        return modified ? letters : syllable;
    }).join(' ');
}

// Get word information from dictionaries
function getWordInfo(word) {
    if (!word) return null;
    
    let infoEN = fullDictionary[word];
    if (!infoEN && word.length === 1) {
        infoEN = charDictionary[word];
    }
    
    let infoVN = fullDictionaryVN[word];
    if (!infoVN && word.length === 1) {
        infoVN = charDictionaryVN[word];
    }
    
    if (!infoEN && !infoVN) return null;
    
    const info = infoEN || infoVN;
    
    let pinyin = info.pinyin;
    if (pinyin) {
        pinyin = pinyinNumbersToTones(pinyin);
    }
    
    return {
        pinyin: pinyin || '?',
        definitionEN: infoEN ? infoEN.definition : null,
        definitionVN: infoVN ? infoVN.definition : null,
        traditional: info.trad
    };
}

// Load all required data
async function loadData() {
    const loadingIndicator = document.getElementById('loading-indicator');
    const mainContent = document.getElementById('main-content');
    
    try {
        console.log('Loading HSK data and dictionaries...');
        
        const [hskResponse, fullResponse, charResponse, fullResponseVN, charResponseVN] = await Promise.all([
            fetch('https://raw.githubusercontent.com/drkameleon/complete-hsk-vocabulary/main/complete.json'),
            fetch('cedict_full.json'),
            fetch('cedict_chars.json'),
            fetch('cvdict_full.json'),
            fetch('cvdict_chars.json')
        ]);
        
        const rawHskData = await hskResponse.json();
        fullDictionary = await fullResponse.json();
        charDictionary = await charResponse.json();
        fullDictionaryVN = await fullResponseVN.json();
        charDictionaryVN = await charResponseVN.json();
        
        // Process HSK data
        hskData = {};
        allHSKWords = [];
        
        rawHskData.forEach((entry) => {
            const word = entry.simplified;
            const levels = entry.level || [];
            
            if (!word) return;
            
            let level = 0;
            for (const lvl of levels) {
                if (lvl.startsWith('new-')) {
                    level = parseInt(lvl.replace('new-', ''));
                    break;
                } else if (lvl.startsWith('old-')) {
                    level = parseInt(lvl.replace('old-', ''));
                }
            }
            
            if (level > 0 && level <= 6) {
                if (!hskData[level]) {
                    hskData[level] = [];
                }
                
                const wordInfo = getWordInfo(word);
                if (wordInfo) {
                    const wordData = {
                        word: word,
                        pinyin: wordInfo.pinyin,
                        definitionEN: wordInfo.definitionEN,
                        definitionVN: wordInfo.definitionVN,
                        level: level
                    };
                    hskData[level].push(wordData);
                    allHSKWords.push(wordData);
                }
            }
        });
        
        // Sort words within each level by pinyin
        for (let level in hskData) {
            hskData[level].sort((a, b) => a.pinyin.localeCompare(b.pinyin));
        }
        
        console.log(`Loaded ${allHSKWords.length} HSK words with definitions`);
        
        updateStats();
        renderHSKList();
        
        loadingIndicator.style.display = 'none';
        mainContent.style.display = 'block';
        
    } catch (error) {
        console.error('Failed to load data:', error);
        loadingIndicator.innerHTML = `
            <div class="loading-content">
                <p style="color: red;">Error loading data. Please check your internet connection and ensure dictionary files are available.</p>
                <p style="color: var(--text-tertiary); font-size: 0.8rem; margin-top: 8px;">Error: ${error.message}</p>
            </div>
        `;
    }
}

// Update statistics panel
function updateStats() {
    const totalWords = allHSKWords.length;
    document.getElementById('total-words').textContent = totalWords;
    document.getElementById('displayed-words').textContent = totalWords;
    
    for (let i = 1; i <= 6; i++) {
        const count = hskData[i] ? hskData[i].length : 0;
        document.getElementById(`hsk${i}-count`).textContent = count;
    }
}

// Render the HSK word list
function renderHSKList(filteredWords = null, expandAll = false) {
    const hskList = document.getElementById('hsk-list');
    const translationMode = document.getElementById('translation-select').value;
    
    // Use filtered words if provided, otherwise use all data
    const wordsToDisplay = filteredWords || hskData;
    
    // Check if we have any words to display
    const hasWords = filteredWords 
        ? filteredWords.length > 0
        : Object.keys(wordsToDisplay).some(level => wordsToDisplay[level] && wordsToDisplay[level].length > 0);
    
    if (!hasWords) {
        hskList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3>No words found</h3>
                <p>Try adjusting your search query</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    // If filtered words (from search or random), organize by level
    if (filteredWords) {
        const wordsByLevel = {};
        filteredWords.forEach(word => {
            if (!wordsByLevel[word.level]) {
                wordsByLevel[word.level] = [];
            }
            wordsByLevel[word.level].push(word);
        });
        
        for (let level = 1; level <= 6; level++) {
            const words = wordsByLevel[level];
            if (words && words.length > 0) {
                html += renderLevelSection(level, words, translationMode, expandAll);
            }
        }
    } else {
        // Render all levels
        for (let level = 1; level <= 6; level++) {
            const words = wordsToDisplay[level];
            if (words && words.length > 0) {
                html += renderLevelSection(level, words, translationMode, expandAll);
            }
        }
    }
    
    hskList.innerHTML = html;
    
    // Add collapse functionality
    document.querySelectorAll('.hsk-level-header').forEach(header => {
        header.addEventListener('click', () => {
            const section = header.closest('.hsk-section');
            const words = section.querySelector('.hsk-words');
            const icon = header.querySelector('.collapse-icon');
            
            words.classList.toggle('collapsed');
            icon.classList.toggle('collapsed');
        });
    });
}

// Render a single HSK level section
function renderLevelSection(level, words, translationMode, expandAll = false) {
    const levelNames = {
        1: 'HSK 1 - Basic',
        2: 'HSK 2 - Elementary',
        3: 'HSK 3 - Intermediate',
        4: 'HSK 4 - Upper Intermediate',
        5: 'HSK 5 - Advanced',
        6: 'HSK 6 - Mastery'
    };
    
    const collapsedClass = expandAll ? '' : 'collapsed';
    
    let html = `
        <div class="hsk-section hsk-level-${level}">
            <div class="hsk-level-header">
                <span class="collapse-icon ${collapsedClass}">▼</span>
                <h2>${levelNames[level]}</h2>
                <span class="hsk-level-count">${words.length} words</span>
            </div>
            <div class="hsk-words ${collapsedClass}">
    `;
    
    words.forEach(word => {
        html += `
            <div class="hsk-word-card">
                <div class="word-header">
                    <span class="word-chinese">${word.word}</span>
                    <span class="word-pinyin">${word.pinyin}</span>
                </div>
        `;
        
        if (translationMode !== 'none') {
            html += '<div class="word-definitions">';
            
            if (translationMode === 'both' || translationMode === 'english') {
                if (word.definitionEN) {
                    html += `<div class="definition-line"><span class="def-lang-tag">[en]</span>${word.definitionEN}</div>`;
                }
            }
            
            if (translationMode === 'both' || translationMode === 'vietnamese') {
                if (word.definitionVN) {
                    html += `<div class="definition-line"><span class="def-lang-tag">[vn]</span>${word.definitionVN}</div>`;
                }
            }
            
            html += '</div>';
        }
        
        html += `
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// Search functionality
function handleSearch(query) {
    isRandomMode = false;
    
    if (!query.trim()) {
        renderHSKList();
        document.getElementById('displayed-words').textContent = allHSKWords.length;
        return;
    }
    
    const searchLower = query.toLowerCase().trim();
    
    const filtered = allHSKWords.filter(word => {
        return word.word.includes(searchLower) ||
               word.pinyin.toLowerCase().includes(searchLower) ||
               (word.definitionEN && word.definitionEN.toLowerCase().includes(searchLower)) ||
               (word.definitionVN && word.definitionVN.toLowerCase().includes(searchLower));
    });
    
    renderHSKList(filtered);
    document.getElementById('displayed-words').textContent = filtered.length;
}

// Randomize functionality
function handleRandomize() {
    const count = parseInt(document.getElementById('random-count').value) || 10;
    const levelFilter = document.getElementById('random-level').value;
    
    // Get words to randomize from
    let sourceWords = allHSKWords;
    if (levelFilter !== 'all') {
        const level = parseInt(levelFilter);
        sourceWords = allHSKWords.filter(word => word.level === level);
    }
    
    if (sourceWords.length === 0) {
        return;
    }
    
    // Shuffle and take N words
    const shuffled = [...sourceWords].sort(() => Math.random() - 0.5);
    const randomWords = shuffled.slice(0, Math.min(count, sourceWords.length));
    
    isRandomMode = true;
    renderHSKList(randomWords, true); // expandAll = true for random mode
    document.getElementById('displayed-words').textContent = randomWords.length;
    
    // Clear search input when randomizing
    document.getElementById('search-input').value = '';
}

// Show all words
function handleShowAll() {
    isRandomMode = false;
    document.getElementById('search-input').value = '';
    renderHSKList();
    document.getElementById('displayed-words').textContent = allHSKWords.length;
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const themeText = themeToggle.querySelector('.theme-text');
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        const isDark = document.body.classList.contains('dark-theme');
        
        if (isDark) {
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    
    // Translation mode selector
    const translationSelect = document.getElementById('translation-select');
    translationSelect.addEventListener('change', () => {
        const searchInput = document.getElementById('search-input');
        if (isRandomMode) {
            handleRandomize();
        } else if (searchInput.value.trim()) {
            handleSearch(searchInput.value);
        } else {
            renderHSKList();
        }
    });
    
    // Search input
    const searchInput = document.getElementById('search-input');
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(e.target.value);
        }, 300);
    });
    
    // Randomize button
    const randomizeBtn = document.getElementById('randomize-btn');
    randomizeBtn.addEventListener('click', handleRandomize);
    
    // Show all button
    const showAllBtn = document.getElementById('show-all-btn');
    showAllBtn.addEventListener('click', handleShowAll);
    
    // Allow Enter key on random count input
    const randomCountInput = document.getElementById('random-count');
    randomCountInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleRandomize();
        }
    });
    
    // Load data
    loadData();
});

