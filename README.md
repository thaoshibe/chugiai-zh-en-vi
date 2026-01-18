# Chinese Text Annotation Tool

A web-based tool for annotating Chinese text with pinyin, word spacing, and **bilingual English & Vietnamese definitions**. Inspired by MandarinSpot's annotation tool.

## Features

- 📝 **Text Annotation** - Automatically segment Chinese text and add pinyin
- 🌏 **Bilingual Support** - English and Vietnamese translations (240,000+ entries total)
- 🔤 **Multiple Phonetic Systems** - Support for Pinyin, Zhuyin, Wade-Giles, and more
- 📚 **Vocabulary Lists** - Generate sortable vocabulary lists filtered by HSK level
- 💡 **Interactive Tooltips** - Hover over words to see bilingual definitions
- 🎨 **Modern UI** - Beautiful, responsive design
- 🖨️ **Print-Friendly** - Optimized for printing annotated text

## Usage

1. Open `index.html` in a web browser
2. Enter Chinese text in the input area
3. Select your preferred settings:
   - Choose phonetic system (Pinyin, Zhuyin, etc.)
   - Configure display options
   - Set HSK level filter for vocabulary
4. Click "Annotate Text" to process
5. Hover over words to see definitions
6. View the vocabulary list below

## Examples

Try these sample texts:

```
你好世界！学习中文很有趣。
今天天气很好。我喜欢看书和喝茶。
我们是学生。他们会说汉语。
```

## Keyboard Shortcuts

- **Ctrl/Cmd + Enter** - Annotate text from the input area

## Dictionaries

The tool uses **two comprehensive dictionaries** for bilingual support:

### CC-CEDICT (Chinese-English)
- **120,000+ words and phrases**
- **11,000+ individual characters**
- Simplified and Traditional Chinese
- Hanyu Pinyin with tone marks
- English definitions
- Used by MandarinSpot.com and many other learning tools

### CVDICT (Chinese-Vietnamese)
- **122,000+ words and phrases**
- **13,000+ individual characters**
- Based on CC-CEDICT with Vietnamese translations
- Maintained by [Phong Phan](https://github.com/ph0ngp/CVDICT)
- Licensed under Creative Commons Attribution-ShareAlike 4.0

The dictionary data is loaded dynamically from JSON files for optimal performance. Users can choose to display:
- English only
- Vietnamese only  
- Both English and Vietnamese (default)

## Technical Details

- **Pure JavaScript** - No external dependencies required (except dictionary files)
- **Client-side Processing** - All annotation happens in your browser
- **Comprehensive Dictionaries** - 240,000+ entries total (120K English + 122K Vietnamese)
- **Bilingual Support** - Toggle between English, Vietnamese, or both languages
- **Advanced Word Segmentation** - Intelligent algorithm for word boundary detection
- **Real HSK Data** - Actual HSK 2.0/3.0 vocabulary levels
- **Responsive Design** - Works on desktop and mobile devices
- **Print Styles** - Clean output when printing
- **Ruby Text Support** - Proper pinyin display above characters using HTML5 ruby tags

## Installation

1. Download all files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `cedict_full.json` (12.7 MB) - English dictionary
   - `cedict_chars.json` (0.7 MB) - English character dictionary
   - `cvdict_full.json` (~13 MB) - Vietnamese dictionary
   - `cvdict_chars.json` (~0.8 MB) - Vietnamese character dictionary

2. Place all files in the same directory

3. Open `index.html` in a web browser (requires local web server for dictionary loading)

### Running with a Local Server

Due to browser security restrictions, the dictionary JSON files need to be served via HTTP. Use one of these methods:

**Python 3:**
```bash
python3 -m http.server 8000
```

**Node.js:**
```bash
npx http-server
```

**PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Future Enhancements

Potential improvements:
- **Full Phonetic System Support** - Complete implementations for Zhuyin, Wade-Giles, etc.
- **Traditional Chinese** - Full support for Traditional character input/output
- **Audio Pronunciation** - Text-to-speech integration
- **Example Sentences** - Show word usage in context
- **Character Etymology** - Stroke order and component breakdown
- **Flashcard Generation** - Export to Anki or other SRS systems
- **Export Functionality** - PDF, Word, or plain text export
- **Bookmarklet** - Annotate any web page like MandarinSpot
- **More Languages** - Add Japanese, Korean, or other language translations

## License

This is an educational project demonstrating Chinese text annotation functionality.

## Acknowledgments

- Inspired by the Chinese text annotation tool at [MandarinSpot.com](https://mandarinspot.com/)
- English dictionary data from **CC-CEDICT** maintained by [MDBG Chinese-English Dictionary](https://www.mdbg.net/)
- Vietnamese dictionary data from **CVDICT** by [Phong Phan](https://github.com/ph0ngp/CVDICT)
- Real HSK 2.0/3.0 vocabulary data from [complete-hsk-vocabulary](https://github.com/drkameleon/complete-hsk-vocabulary) (MIT License)
- Both CC-CEDICT and CVDICT are licensed under Creative Commons Attribution-ShareAlike 4.0

## License

This tool is for educational purposes. The CC-CEDICT dictionary data is licensed under Creative Commons Attribution-ShareAlike 4.0.

