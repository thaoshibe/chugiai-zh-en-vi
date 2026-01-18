// Chinese Text Annotation Tool - Using CC-CEDICT Dictionary and CVDICT
// Dictionaries will be loaded dynamically

// Translations for UI elements
const translations = {
    en: {
        title: "🇨🇳 Chinese Text Annotation",
        subtitle: "Add pinyin, word spacing, and definitions to Chinese text ✨",
        viewHskLink: "📚 View HSK Word List",
        showChineseTitle: "Show Chinese",
        pinyinAndChars: "Pinyin + Characters",
        pinyinOnly: "Pinyin only",
        charsOnly: "Characters only",
        translationLangTitle: "Translation Language",
        englishAndVietnamese: "English + Vietnamese",
        englishOnly: "English only",
        vietnameseOnly: "Vietnamese only",
        optionsTitle: "Options",
        addSpaces: "Add spaces between words",
        forPrinting: "For printing",
        addVocabularyTitle: "Add Vocabulary",
        forAllWords: "For all words",
        hsk1AndUp: "HSK 1 and up",
        hsk2AndUp: "HSK 2 and up",
        hsk3AndUp: "HSK 3 and up",
        hsk4AndUp: "HSK 4 and up",
        hsk5AndUp: "HSK 5 and up",
        hsk6AndUp: "HSK 6 and up",
        notInHsk: "Not in HSK",
        noneAtAll: "None at all",
        sortByTitle: "Sort By",
        firstAppearance: "First appearance",
        pronunciation: "Pronunciation",
        frequency: "Frequency",
        loadingMessage: "⏳ Loading English & Vietnamese dictionaries (240,000+ entries) and HSK data...",
        enterChineseText: "Enter Chinese Text",
        inputPlaceholder: "在这里输入中文文本... ✨\n\nExample: 你好世界！学习中文很有趣。今天天气很好。我们一起学习汉语吧！",
        exampleButton: "▶️ Run Example",
        annotateButton: "🚀 Annotate Text",
        annotatedTextTitle: "📄 Annotated Text",
        decreaseFontTitle: "Decrease font size",
        increaseFontTitle: "Increase font size",
        annotatedPlaceholder: "✨ Your annotated text will appear here...",
        notesTitle: "📝 Notes",
        clearNotesButton: "🗑️ Clear All",
        clearNotesTitle: "Clear all notes",
        notesPlaceholder: "💡 Click on words to add them to your notes...",
        vocabularyListTitle: "📚 Vocabulary List",
        aboutTitle: "ℹ️ About This Tool",
        aboutDescription: "This Chinese text annotation tool uses the <strong><a href=\"https://www.mdbg.net/chinese/dictionary?page=cedict\" target=\"_blank\">CC-CEDICT</a> dictionary with 120,000+ entries</strong>, <strong>CVDICT Chinese-Vietnamese dictionary with 122,000+ entries</strong>, and <strong>real HSK 2.0/3.0 vocabulary data</strong> to help you learn Chinese by:",
        feature1: "📏 Adding spaces between words for easier reading",
        feature2: "🔊 Displaying inline Pinyin or other phonetic systems above characters",
        feature3: "💬 Showing pop-up definitions in English and/or Vietnamese when you hover over words",
        feature4: "📚 Generating vocabulary lists filtered by actual HSK level (1-6+)",
        feature5: "✂️ Advanced word segmentation for accurate word boundaries",
        dictionariesNote: "<strong>📖 Dictionaries:</strong> <a href=\"https://www.mdbg.net/chinese/dictionary?page=cedict\" target=\"_blank\">CC-CEDICT</a> by MDBG (CC BY-SA 4.0 License) and <a href=\"https://github.com/ph0ngp/CVDICT\" target=\"_blank\">CVDICT</a> by Phong Phan (CC BY-SA 4.0 License)",
        hskDataNote: "<strong>📊 HSK Data:</strong> Real HSK 2.0/3.0 vocabulary lists from <a href=\"https://github.com/drkameleon/complete-hsk-vocabulary\" target=\"_blank\">complete-hsk-vocabulary</a> (MIT License)"
    },
    vi: {
        title: "🇨🇳 Công cụ chú thích văn bản tiếng Trung",
        subtitle: "Thêm phiên âm pinyin, khoảng cách từ và định nghĩa cho văn bản tiếng Trung ✨",
        viewHskLink: "📚 Xem danh sách từ vựng HSK",
        showChineseTitle: "Hiển thị tiếng Trung",
        pinyinAndChars: "Pinyin + Chữ Hán",
        pinyinOnly: "Chỉ Pinyin",
        charsOnly: "Chỉ Chữ Hán",
        translationLangTitle: "Ngôn ngữ dịch",
        englishAndVietnamese: "Tiếng Anh + Tiếng Việt",
        englishOnly: "Chỉ tiếng Anh",
        vietnameseOnly: "Chỉ tiếng Việt",
        optionsTitle: "Tùy chọn",
        addSpaces: "Thêm khoảng cách giữa các từ",
        forPrinting: "Để in",
        addVocabularyTitle: "Thêm từ vựng",
        forAllWords: "Cho tất cả các từ",
        hsk1AndUp: "HSK 1 trở lên",
        hsk2AndUp: "HSK 2 trở lên",
        hsk3AndUp: "HSK 3 trở lên",
        hsk4AndUp: "HSK 4 trở lên",
        hsk5AndUp: "HSK 5 trở lên",
        hsk6AndUp: "HSK 6 trở lên",
        notInHsk: "Không có trong HSK",
        noneAtAll: "Không có gì cả",
        sortByTitle: "Sắp xếp theo",
        firstAppearance: "Xuất hiện đầu tiên",
        pronunciation: "Phiên âm",
        frequency: "Tần suất",
        loadingMessage: "⏳ Đang tải từ điển tiếng Anh & tiếng Việt (240.000+ mục) và dữ liệu HSK...",
        enterChineseText: "Nhập văn bản tiếng Trung",
        inputPlaceholder: "在这里输入中文文本... ✨\n\nVí dụ: 你好世界！学习中文很有趣。今天天气很好。我们一起学习汉语吧！",
        exampleButton: "▶️ Chạy ví dụ",
        annotateButton: "🚀 Chú thích văn bản",
        annotatedTextTitle: "📄 Văn bản đã chú thích",
        decreaseFontTitle: "Giảm cỡ chữ",
        increaseFontTitle: "Tăng cỡ chữ",
        annotatedPlaceholder: "✨ Văn bản đã chú thích của bạn sẽ xuất hiện ở đây...",
        notesTitle: "📝 Ghi chú",
        clearNotesButton: "🗑️ Xóa tất cả",
        clearNotesTitle: "Xóa tất cả ghi chú",
        notesPlaceholder: "💡 Nhấp vào các từ để thêm chúng vào ghi chú của bạn...",
        vocabularyListTitle: "📚 Danh sách từ vựng",
        aboutTitle: "ℹ️ Giới thiệu công cụ",
        aboutDescription: "Công cụ chú thích văn bản tiếng Trung này sử dụng <strong>từ điển <a href=\"https://www.mdbg.net/chinese/dictionary?page=cedict\" target=\"_blank\">CC-CEDICT</a> với hơn 120.000 mục</strong>, <strong>từ điển Trung-Việt CVDICT với hơn 122.000 mục</strong>, và <strong>dữ liệu từ vựng HSK 2.0/3.0 thực tế</strong> để giúp bạn học tiếng Trung bằng cách:",
        feature1: "📏 Thêm khoảng cách giữa các từ để dễ đọc hơn",
        feature2: "🔊 Hiển thị phiên âm Pinyin hoặc các hệ thống phiên âm khác phía trên chữ Hán",
        feature3: "💬 Hiển thị định nghĩa bằng tiếng Anh và/hoặc tiếng Việt khi bạn di chuột qua các từ",
        feature4: "📚 Tạo danh sách từ vựng được lọc theo cấp độ HSK thực tế (1-6+)",
        feature5: "✂️ Phân đoạn từ nâng cao để xác định ranh giới từ chính xác",
        dictionariesNote: "<strong>📖 Từ điển:</strong> <a href=\"https://www.mdbg.net/chinese/dictionary?page=cedict\" target=\"_blank\">CC-CEDICT</a> của MDBG (Giấy phép CC BY-SA 4.0) và <a href=\"https://github.com/ph0ngp/CVDICT\" target=\"_blank\">CVDICT</a> của Phong Phan (Giấy phép CC BY-SA 4.0)",
        hskDataNote: "<strong>📊 Dữ liệu HSK:</strong> Danh sách từ vựng HSK 2.0/3.0 thực tế từ <a href=\"https://github.com/drkameleon/complete-hsk-vocabulary\" target=\"_blank\">complete-hsk-vocabulary</a> (Giấy phép MIT)"
    }
};

let currentLang = 'en';

let fullDictionary = null;
let charDictionary = null;
let fullDictionaryVN = null;
let charDictionaryVN = null;
let hskData = null;
let dictionaryLoaded = false;
let notedWords = new Set(); // Track words added to notes

// Load dictionaries
async function loadDictionaries() {
    if (dictionaryLoaded) return true;
    
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) loadingIndicator.style.display = 'block';
    
    try {
        console.log('Loading dictionaries and HSK data...');
        
        // Load English, Vietnamese dictionaries and HSK data in parallel
        const [fullResponse, charResponse, fullResponseVN, charResponseVN, hskResponse] = await Promise.all([
            fetch('cedict_full.json'),
            fetch('cedict_chars.json'),
            fetch('cvdict_full.json'),
            fetch('cvdict_chars.json'),
            fetch('https://raw.githubusercontent.com/drkameleon/complete-hsk-vocabulary/main/complete.json')
        ]);
        
        fullDictionary = await fullResponse.json();
        charDictionary = await charResponse.json();
        fullDictionaryVN = await fullResponseVN.json();
        charDictionaryVN = await charResponseVN.json();
        const rawHskData = await hskResponse.json();
        
        // Process HSK data into a simple lookup map: word -> HSK level number
        hskData = {};
        
        rawHskData.forEach((entry) => {
            // The full JSON uses "simplified" and "level" fields
            const word = entry.simplified;
            const levels = entry.level || [];
            
            if (!word) return;
            
            // Extract numeric level (prefer new HSK 3.0, fallback to old HSK 2.0)
            // Level format is like: ["new-1", "old-2"] or ["old-3"]
            let level = 0;
            for (const lvl of levels) {
                // Look for "new-X" first (HSK 3.0)
                if (lvl.startsWith('new-')) {
                    level = parseInt(lvl.replace('new-', ''));
                    break;
                } 
                // Fallback to "old-X" (HSK 2.0)
                else if (lvl.startsWith('old-')) {
                    level = parseInt(lvl.replace('old-', ''));
                }
            }
            
            if (level > 0) {
                hskData[word] = level;
            }
        });
        
        console.log(`Loaded ${Object.keys(fullDictionary).length} English words, ${Object.keys(fullDictionaryVN).length} Vietnamese words, ${Object.keys(charDictionary).length} characters, and ${Object.keys(hskData).length} HSK words`);
        dictionaryLoaded = true;
        
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        return true;
    } catch (error) {
        console.error('Failed to load dictionaries:', error);
        if (loadingIndicator) {
            loadingIndicator.innerHTML = '<p style="color: red;">Error loading dictionary. Please ensure cedict_full.json, cedict_chars.json, cvdict_full.json, and cvdict_chars.json are in the same directory.</p>';
        }
        return false;
    }
}

// Advanced Chinese word segmentation
function segmentChinese(text) {
    if (!fullDictionary) {
        console.error('Dictionary not loaded!');
        return [];
    }
    
    const words = [];
    let i = 0;
    
    while (i < text.length) {
        let found = false;
        
        // Try to match longest words first (up to 8 characters)
        for (let len = Math.min(8, text.length - i); len >= 2; len--) {
            const substr = text.substr(i, len);
            if (fullDictionary[substr]) {
                words.push(substr);
                i += len;
                found = true;
                break;
            }
        }
        
        // If no multi-character match, take single character
        if (!found) {
            const char = text[i];
            // Check if it's Chinese character
            if (char.match(/[\u4e00-\u9fa5]/)) {
                words.push(char);
            } else if (char === '\n') {
                // Preserve newlines explicitly
                words.push(char);
            } else if (char.match(/\S/)) {
                // Non-whitespace, non-Chinese character (punctuation, numbers, etc.)
                words.push(char);
            }
            i++;
        }
    }
    
    return words;
}

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
    
    // Process each syllable separately
    return pinyin.split(' ').map(syllable => {
        // Extract tone number (1-5) from end of syllable
        const match = syllable.match(/^([a-zü:]+)([1-5])$/i);
        if (!match) return syllable; // No tone number found
        
        let [_, letters, tone] = match;
        letters = letters.replace(/u:/g, 'ü'); // Handle u: notation for ü
        tone = parseInt(tone);
        
        // Find which vowel gets the tone mark (priority: a/e, ou, others)
        let modified = false;
        
        // Rule 1: 'a' or 'e' always get the tone
        if (letters.includes('a')) {
            letters = letters.replace('a', toneMarks['a'][tone - 1]);
            modified = true;
        } else if (letters.includes('e')) {
            letters = letters.replace('e', toneMarks['e'][tone - 1]);
            modified = true;
        }
        // Rule 2: 'ou' - 'o' gets the tone
        else if (letters.includes('ou')) {
            letters = letters.replace('o', toneMarks['o'][tone - 1]);
            modified = true;
        }
        // Rule 3: Otherwise, the last vowel gets the tone
        else {
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

// Convert pinyin to Zhuyin (Bopomofo)
function pinyinToZhuyin(pinyin) {
    // Simplified mapping (for demonstration)
    const zhuyinMap = {
        'a': 'ㄚ', 'o': 'ㄛ', 'e': 'ㄜ', 'ai': 'ㄞ', 'ei': 'ㄟ', 'ao': 'ㄠ', 'ou': 'ㄡ',
        'an': 'ㄢ', 'en': 'ㄣ', 'ang': 'ㄤ', 'eng': 'ㄥ', 'er': 'ㄦ',
        'b': 'ㄅ', 'p': 'ㄆ', 'm': 'ㄇ', 'f': 'ㄈ', 'd': 'ㄉ', 't': 'ㄊ',
        'n': 'ㄋ', 'l': 'ㄌ', 'g': 'ㄍ', 'k': 'ㄎ', 'h': 'ㄏ',
        'j': 'ㄐ', 'q': 'ㄑ', 'x': 'ㄒ', 'zh': 'ㄓ', 'ch': 'ㄔ', 'sh': 'ㄕ',
        'r': 'ㄖ', 'z': 'ㄗ', 'c': 'ㄘ', 's': 'ㄙ', 'y': 'ㄧ', 'w': 'ㄨ'
    };
    
    // This is a simplified conversion - in production, use a proper library
    // For now, return pinyin as is
    return pinyin;
}

// Add red color to pinyin
function colorPinyin(pinyin) {
    if (!pinyin) return pinyin;
    return `<span style="color: #e74c3c;">${pinyin}</span>`;
}

// Get word information from dictionary
function getWordInfo(word) {
    if (!word) return null;
    
    // Try full dictionary first (English)
    let infoEN = fullDictionary[word];
    
    // If not found and single character, try character dictionary
    if (!infoEN && word.length === 1) {
        infoEN = charDictionary[word];
    }
    
    // Try Vietnamese dictionary
    let infoVN = fullDictionaryVN[word];
    if (!infoVN && word.length === 1) {
        infoVN = charDictionaryVN[word];
    }
    
    // If neither found, return null
    if (!infoEN && !infoVN) return null;
    
    // Use whichever dictionary has the entry (prefer English for pinyin)
    const info = infoEN || infoVN;
    
    // Convert pinyin to have tone marks
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

// Get HSK level from real HSK data
function getHSKLevel(word) {
    // Look up word in the real HSK dataset
    if (hskData && hskData[word]) {
        return hskData[word];
    }
    
    // Not in HSK or data not loaded yet
    return 0;
}

// Load noted words from localStorage
function loadNotedWords() {
    try {
        const saved = localStorage.getItem('notedWords');
        if (saved) {
            notedWords = new Set(JSON.parse(saved));
        }
    } catch (error) {
        console.error('Error loading noted words:', error);
        notedWords = new Set();
    }
}

// Save noted words to localStorage
function saveNotedWords() {
    try {
        localStorage.setItem('notedWords', JSON.stringify(Array.from(notedWords)));
    } catch (error) {
        console.error('Error saving noted words:', error);
    }
}

// Add word to notes
function addWordToNotes(word) {
    notedWords.add(word);
    saveNotedWords();
    updateNotesDisplay();
    updateWordHighlights();
}

// Remove word from notes
function removeWordFromNotes(word) {
    notedWords.delete(word);
    saveNotedWords();
    updateNotesDisplay();
    updateWordHighlights();
}

// Clear all notes
function clearAllNotes() {
    if (notedWords.size === 0) return;
    
    if (confirm('Are you sure you want to clear all notes?')) {
        notedWords.clear();
        saveNotedWords();
        updateNotesDisplay();
        updateWordHighlights();
    }
}

// Update notes display
function updateNotesDisplay() {
    const notesList = document.getElementById('notes-list');
    const translationLang = document.querySelector('input[name="translation-lang"]:checked')?.value || 'both';
    
    if (notedWords.size === 0) {
        notesList.innerHTML = '<p class="placeholder-text">Click on words to add them to your notes...</p>';
        return;
    }
    
    let html = '';
    notedWords.forEach(word => {
        const wordInfo = getWordInfo(word);
        
        if (wordInfo) {
            const coloredPinyin = colorPinyin(wordInfo.pinyin);
            
            // Build definition based on language selection
            let definition = '';
            if (translationLang === 'both') {
                const parts = [];
                if (wordInfo.definitionEN) parts.push(wordInfo.definitionEN);
                if (wordInfo.definitionVN) parts.push(wordInfo.definitionVN);
                definition = parts.join(' | ');
            } else if (translationLang === 'english') {
                definition = wordInfo.definitionEN || 'Definition not available';
            } else if (translationLang === 'vietnamese') {
                definition = wordInfo.definitionVN || 'Definition not available';
            }
            
            html += `
                <div class="note-item" data-word="${word}">
                    <button class="note-remove" onclick="removeWordFromNotes('${word}')" title="Remove from notes">×</button>
                    <div class="note-word">
                        ${word}
                        <span class="note-pinyin">${coloredPinyin}</span>
                    </div>
                    <div class="note-definition">${definition}</div>
                </div>
            `;
        }
    });
    
    notesList.innerHTML = html;
}

// Update word highlights in annotated text
function updateWordHighlights() {
    const annotatedWords = document.querySelectorAll('.annotated-word');
    annotatedWords.forEach(wordElement => {
        const word = wordElement.getAttribute('data-word');
        if (notedWords.has(word)) {
            wordElement.classList.add('noted');
        } else {
            wordElement.classList.remove('noted');
        }
    });
}

// Handle word click in annotated text
function handleWordClick(event) {
    const wordElement = event.currentTarget;
    const word = wordElement.getAttribute('data-word');
    
    if (!word) return;
    
    if (notedWords.has(word)) {
        removeWordFromNotes(word);
    } else {
        addWordToNotes(word);
    }
}

// Annotate the Chinese text
async function annotateText() {
    const input = document.getElementById('chinese-input').value.trim();
    const output = document.getElementById('annotated-output');
    const vocabSection = document.getElementById('vocabulary-section');
    const vocabList = document.getElementById('vocabulary-list');
    
    if (!input) {
        output.innerHTML = '<p class="placeholder-text">Please enter some Chinese text to annotate.</p>';
        vocabSection.style.display = 'none';
        return;
    }
    
    // Load dictionaries if not already loaded
    if (!dictionaryLoaded) {
        const loaded = await loadDictionaries();
        if (!loaded) {
            output.innerHTML = '<p class="placeholder-text" style="color: red;">Failed to load dictionary. Please refresh the page.</p>';
            return;
        }
    }
    
    // Get settings
    const showChinese = document.querySelector('input[name="show-chinese"]:checked').value;
    const translationLang = document.querySelector('input[name="translation-lang"]:checked').value;
    const addSpaces = document.getElementById('add-spaces').checked;
    const hskLevel = document.getElementById('hsk-level').value;
    const sortBy = document.getElementById('sort-by').value;
    
    // Segment the text
    const words = segmentChinese(input);
    
    // Build annotated HTML
    let html = '';
    const vocabMap = new Map();
    
    words.forEach(word => {
        // Skip pure whitespace or empty strings (but keep newlines)
        if (!word || (!word.trim() && word !== '\n')) return;
        
        const isChinese = word.match(/[\u4e00-\u9fa5]/);
        
        if (isChinese) {
            const wordInfo = getWordInfo(word);
            
            if (wordInfo) {
                const phonetic = wordInfo.pinyin;
                const coloredPinyin = colorPinyin(phonetic);
                
                // Build definition based on language selection
                let definition = '';
                const tooltipHeader = `<div class="tooltip-header">${word} ${coloredPinyin}</div>`;
                
                if (translationLang === 'both') {
                    let meanings = '';
                    if (wordInfo.definitionEN) {
                        meanings += `<div class="tooltip-meaning">${wordInfo.definitionEN}</div>`;
                    }
                    if (wordInfo.definitionVN) {
                        meanings += `<div class="tooltip-meaning">${wordInfo.definitionVN}</div>`;
                    }
                    definition = tooltipHeader + meanings;
                } else if (translationLang === 'english') {
                    const meaning = wordInfo.definitionEN || 'English definition not available';
                    definition = tooltipHeader + `<div class="tooltip-meaning">${meaning}</div>`;
                } else if (translationLang === 'vietnamese') {
                    const meaning = wordInfo.definitionVN || 'Vietnamese definition not available';
                    definition = tooltipHeader + `<div class="tooltip-meaning">${meaning}</div>`;
                }
                
                let wordHtml = `<span class="annotated-word" data-word="${word}">`;
                
                if (showChinese === 'both') {
                    wordHtml += `<ruby><span class="chinese">${word}</span><rt class="pinyin">${coloredPinyin}</rt></ruby>`;
                } else if (showChinese === 'pronunciation') {
                    wordHtml += `<span class="pinyin-only">${coloredPinyin}</span>`;
                } else { // characters only
                    wordHtml += `<span class="chinese">${word}</span>`;
                }
                
                wordHtml += `<span class="tooltip">${definition}</span>`;
                wordHtml += '</span>';
                
                if (addSpaces) {
                    wordHtml += ' ';
                }
                
                html += wordHtml;
                
                // Add to vocabulary list
                if (!vocabMap.has(word)) {
                    vocabMap.set(word, {
                        word: word,
                        phonetic: phonetic,
                        definitionEN: wordInfo.definitionEN,
                        definitionVN: wordInfo.definitionVN,
                        hsk: getHSKLevel(word)
                    });
                }
            } else {
                // Character not in dictionary
                html += `<span class="annotated-word unknown">
                    <span class="chinese">${word}</span>
                    <span class="tooltip">Definition not available</span>
                </span>`;
                if (addSpaces) html += ' ';
            }
        } else {
            // Non-Chinese character (punctuation, numbers, letters)
            // Convert newlines to <br> tags
            const escapedWord = word.replace(/\n/g, '<br>');
            html += escapedWord;
        }
    });
    
    output.innerHTML = html || '<p class="placeholder-text">No content to display.</p>';
    
    // Add click handlers to annotated words
    const annotatedWords = output.querySelectorAll('.annotated-word:not(.unknown)');
    annotatedWords.forEach(wordElement => {
        wordElement.addEventListener('click', handleWordClick);
    });
    
    // Update word highlights based on noted words
    updateWordHighlights();
    
    // Update notes display
    updateNotesDisplay();
    
    // Generate vocabulary list
    if (hskLevel !== 'none') {
        let vocabArray = Array.from(vocabMap.values());
        
        // Filter by HSK level
        if (hskLevel === 'hsk1') {
            vocabArray = vocabArray.filter(v => v.hsk >= 1);
        } else if (hskLevel === 'hsk2') {
            vocabArray = vocabArray.filter(v => v.hsk >= 2);
        } else if (hskLevel === 'hsk3') {
            vocabArray = vocabArray.filter(v => v.hsk >= 3);
        } else if (hskLevel === 'hsk4') {
            vocabArray = vocabArray.filter(v => v.hsk >= 4);
        } else if (hskLevel === 'hsk5') {
            vocabArray = vocabArray.filter(v => v.hsk >= 5);
        } else if (hskLevel === 'hsk6') {
            vocabArray = vocabArray.filter(v => v.hsk >= 6);
        } else if (hskLevel === 'not-hsk') {
            vocabArray = vocabArray.filter(v => v.hsk === 0);
        }
        
        // Sort vocabulary
        if (sortBy === 'pronunciation') {
            vocabArray.sort((a, b) => a.phonetic.localeCompare(b.phonetic));
        } else if (sortBy === 'frequency') {
            vocabArray.sort((a, b) => a.hsk - b.hsk);
        }
        // 'appearance' keeps the order as is
        
        // Generate vocabulary HTML
        let vocabHtml = '';
        vocabArray.forEach(vocab => {
            const hskLabel = vocab.hsk > 0 ? `HSK ${vocab.hsk}` : 'Not in HSK';
            const coloredPinyin = colorPinyin(vocab.phonetic);
            
            // Build definition text based on language selection
            let definitionText = '';
            if (translationLang === 'both') {
                if (vocab.definitionEN && vocab.definitionVN) {
                    definitionText = `<div class="vocab-meaning-line"><span class="lang-tag">[en]</span>${vocab.definitionEN}</div><div class="vocab-meaning-line"><span class="lang-tag">[vn]</span>${vocab.definitionVN}</div>`;
                } else if (vocab.definitionEN) {
                    definitionText = `<div class="vocab-meaning-line"><span class="lang-tag">[en]</span>${vocab.definitionEN}</div>`;
                } else if (vocab.definitionVN) {
                    definitionText = `<div class="vocab-meaning-line"><span class="lang-tag">[vn]</span>${vocab.definitionVN}</div>`;
                }
            } else if (translationLang === 'english') {
                definitionText = `<div class="vocab-meaning-line"><span class="lang-tag">[en]</span>${vocab.definitionEN || 'English definition not available'}</div>`;
            } else if (translationLang === 'vietnamese') {
                definitionText = `<div class="vocab-meaning-line"><span class="lang-tag">[vn]</span>${vocab.definitionVN || 'Vietnamese definition not available'}</div>`;
            }
            
            vocabHtml += `
                <div class="vocab-item" data-word="${vocab.word}">
                    <div class="vocab-header">
                        <span class="vocab-chinese">${vocab.word}</span>
                        <span class="vocab-pinyin">${coloredPinyin}</span>
                    </div>
                    <div class="vocab-meanings">${definitionText}</div>
                    <div class="vocab-meta">${hskLabel}</div>
                </div>
            `;
        });
        
        vocabList.innerHTML = vocabHtml || '<p class="placeholder-text">No vocabulary matching the filter criteria.</p>';
        vocabSection.style.display = vocabArray.length > 0 ? 'block' : 'none';
    } else {
        vocabSection.style.display = 'none';
    }
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const themeText = themeToggle.querySelector('.theme-text');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme on load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
    }
    
    // Toggle theme on button click
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

// Font size functionality
function initFontSize() {
    const fontIncreaseBtn = document.getElementById('font-increase');
    const fontDecreaseBtn = document.getElementById('font-decrease');
    const outputArea = document.getElementById('annotated-output');
    
    if (!fontIncreaseBtn || !fontDecreaseBtn || !outputArea) return;
    
    const fontSizes = ['small', 'medium', 'large', 'xlarge'];
    
    // Check for saved font size preference or default to 'medium'
    let currentSizeIndex = fontSizes.indexOf(localStorage.getItem('fontSize') || 'medium');
    if (currentSizeIndex === -1) currentSizeIndex = 1; // Default to 'medium' (index 1)
    
    // Apply the saved font size on load
    function applyFontSize() {
        // Remove all font size classes
        fontSizes.forEach(size => outputArea.classList.remove(`font-${size}`));
        // Add the current size class
        outputArea.classList.add(`font-${fontSizes[currentSizeIndex]}`);
        // Save preference
        localStorage.setItem('fontSize', fontSizes[currentSizeIndex]);
    }
    
    applyFontSize();
    
    // Increase font size
    fontIncreaseBtn.addEventListener('click', () => {
        if (currentSizeIndex < fontSizes.length - 1) {
            currentSizeIndex++;
            applyFontSize();
        }
    });
    
    // Decrease font size
    fontDecreaseBtn.addEventListener('click', () => {
        if (currentSizeIndex > 0) {
            currentSizeIndex--;
            applyFontSize();
        }
    });
}

// Resizable divider functionality
function initResizableDivider() {
    const resizeHandle = document.getElementById('resize-handle');
    const resultsContainer = document.getElementById('results-container');
    const notesSection = document.getElementById('notes-section');
    
    if (!resizeHandle || !resultsContainer || !notesSection) return;
    
    let isResizing = false;
    let startX = 0;
    let startWidth = 0;
    
    // Load saved width from localStorage
    const savedWidth = localStorage.getItem('notesWidth');
    if (savedWidth) {
        resultsContainer.style.gridTemplateColumns = `1fr 4px ${savedWidth}px`;
    }
    
    resizeHandle.addEventListener('mousedown', (e) => {
        isResizing = true;
        startX = e.clientX;
        startWidth = notesSection.offsetWidth;
        
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        
        const deltaX = startX - e.clientX;
        const newWidth = Math.max(200, Math.min(600, startWidth + deltaX));
        
        resultsContainer.style.gridTemplateColumns = `1fr 4px ${newWidth}px`;
    });
    
    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            
            // Save the new width to localStorage
            const currentWidth = notesSection.offsetWidth;
            localStorage.setItem('notesWidth', currentWidth);
        }
    });
}

// Language switching functionality
function updateLanguage(lang) {
    currentLang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update title attributes (for tooltips)
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[lang] && translations[lang][key]) {
            element.title = translations[lang][key];
        }
    });
    
    // Save language preference
    localStorage.setItem('language', lang);
}

function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (!langToggle) return;
    
    const langText = langToggle.querySelector('.lang-text');
    
    // Check for saved language preference or default to 'en'
    const savedLang = localStorage.getItem('language') || 'en';
    currentLang = savedLang;
    
    // Apply the saved language on load
    if (savedLang === 'vi') {
        langText.textContent = 'VN';
        updateLanguage('vi');
    } else {
        langText.textContent = 'EN';
        updateLanguage('en');
    }
    
    // Toggle language on button click
    langToggle.addEventListener('click', () => {
        if (currentLang === 'en') {
            currentLang = 'vi';
            langText.textContent = 'VN';
            updateLanguage('vi');
        } else {
            currentLang = 'en';
            langText.textContent = 'EN';
            updateLanguage('en');
        }
    });
}

// Run example functionality
function runExample() {
    const inputArea = document.getElementById('chinese-input');
    const exampleText = "你好世界！学习中文很有趣。今天天气很好。我们一起学习汉语吧！";
    
    if (inputArea) {
        inputArea.value = exampleText;
        // Automatically trigger annotation
        annotateText();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const annotateBtn = document.getElementById('annotate-btn');
    const exampleBtn = document.getElementById('example-btn');
    const inputArea = document.getElementById('chinese-input');
    const clearNotesBtn = document.getElementById('clear-notes-btn');
    
    if (annotateBtn) {
        annotateBtn.addEventListener('click', annotateText);
    }
    
    // Example button click handler
    if (exampleBtn) {
        exampleBtn.addEventListener('click', runExample);
    }
    
    // Allow Ctrl/Cmd + Enter to annotate
    if (inputArea) {
        inputArea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                annotateText();
            }
        });
    }
    
    // Clear notes button
    if (clearNotesBtn) {
        clearNotesBtn.addEventListener('click', clearAllNotes);
    }
    
    // Update notes display when translation language changes
    const translationRadios = document.querySelectorAll('input[name="translation-lang"]');
    translationRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            updateNotesDisplay();
        });
    });
    
    // Initialize language toggle
    initLanguageToggle();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize font size
    initFontSize();
    
    // Initialize resizable divider
    initResizableDivider();
    
    // Load noted words from localStorage
    loadNotedWords();
    updateNotesDisplay();
    
    // Pre-load dictionary in background
    console.log('Pre-loading dictionary...');
    loadDictionaries();
});
