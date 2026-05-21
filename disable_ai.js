const fs = require('fs');
const path = require('path');

function disableApiInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/const ai = new GoogleGenAI/g, '/* API servisleri geçici olarak devre dışı bırakıldı\n            const ai = new GoogleGenAI');
    content = content.replace(/catch \(e\) { console\.error/g, '*/\n        } catch (e) { console.error');
    content = content.replace(/catch \(error\) { console\.error/g, '*/\n        } catch (error) { console.error');
    content = content.replace(/catch \(err\) { console\.error/g, '*/\n        } catch (err) { console.error');

    // This regex replaces all catch instances that are adjacent to our GoogleGenAI block
    // Better to use AST or just simple multi edit file.
}
