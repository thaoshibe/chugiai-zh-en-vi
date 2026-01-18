# Quick Start Guide

## 🎉 You now have a BILINGUAL Chinese text annotation tool!

### What's Different Now?

**BEFORE:** 50 words (basically useless)
**NOW:** 240,000+ entries with BOTH English AND Vietnamese translations!
- 120,589 words from CC-CEDICT (English)
- 122,595 words from CVDICT (Vietnamese)

## Files in Your Directory

```
cedict_full.json    - 13 MB   - English word dictionary (120,589 entries)
cedict_chars.json   - 761 KB  - English character dictionary (11,010 entries)
cvdict_full.json    - 13 MB   - Vietnamese word dictionary (122,595 entries)
cvdict_chars.json   - 800 KB  - Vietnamese character dictionary (13,617 entries)
index.html          - 6 KB    - Main application
script.js           - 13 KB   - Application logic with bilingual support
styles.css          - 7.2 KB  - Beautiful, modern styling
```

## How to Use

### 1. The Server is Already Running! 🚀

Open your browser and go to:
```
http://localhost:8000
```

### 2. Test It Out

Try pasting this text:
```
你好世界！我喜欢学习中文。今天天气很好，我们一起去图书馆看书吧。
中国有很多美丽的地方，比如长城、故宫、西湖等等。
学习汉语需要时间和努力，但是非常有趣和有用。
```

### 3. Features to Try

- ✅ **Bilingual Translations** - English, Vietnamese, or BOTH at once!
- ✅ **Multiple Phonetic Systems** - Switch between Pinyin, Zhuyin, etc.
- ✅ **Display Modes** - Show characters, pinyin, or both
- ✅ **Word Spacing** - Toggle spaces between words
- ✅ **Hover Tooltips** - See bilingual definitions
- ✅ **HSK Filtering** - Filter vocabulary by level (real HSK 2.0/3.0 data)
- ✅ **Sorting Options** - Sort by appearance, pronunciation, etc.

## Technical Details

### Dictionary Sources
- **CC-CEDICT** by MDBG - 120,000+ English entries (same as MandarinSpot)
- **CVDICT** by Phong Phan - 122,000+ Vietnamese entries
- Over 240,000 total word entries
- Creative Commons licensed (CC BY-SA 4.0)
- Includes pinyin, definitions, and both simplified/traditional
- Real HSK 2.0/3.0 vocabulary data

### Word Segmentation
Uses an advanced longest-match algorithm that:
- Tries to match up to 8-character words
- Falls back to shorter words
- Handles single characters as fallback
- Processes punctuation and non-Chinese text

### Performance
- Dictionary loads in ~1-2 seconds
- Pre-loads in background on page load
- Client-side processing (no server needed after loading)

## Stopping the Server

When you're done, stop the server:
```bash
pkill -f "python3 -m http.server"
```

## Restarting the Server

If you need to restart:
```bash
cd /Users/thaon/Desktop/tt
python3 -m http.server 8000
```

## Key Improvements Over Original

1. **240,000+ words** vs 50 words - BILINGUAL support!
2. **Real dictionary data** - CC-CEDICT (English) + CVDICT (Vietnamese)
3. **Advanced word segmentation** vs naive character matching
4. **Proper ruby text** for pinyin display
5. **Dynamic dictionary loading** for better performance
6. **Real HSK 2.0/3.0 data** - actual vocabulary levels
7. **Professional implementation** matching MandarinSpot's approach
8. **Language toggle** - Choose English, Vietnamese, or both!

## Browser Console

Open browser DevTools (F12) to see:
- Dictionary loading progress
- Number of entries loaded
- Any errors or warnings

## Need Help?

Check the browser console for:
```
Loading dictionaries and HSK data...
Loaded 120589 English words, 122595 Vietnamese words, 11010 characters, and XXXX HSK words
```

If you see this, everything is working perfectly!

---

**Enjoy your bilingual Chinese text annotation tool! 🇨🇳 🇬🇧 🇻🇳**


