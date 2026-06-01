const fs = require('fs');

function reverseFix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    // Restore the one </div> we removed globally
    content = content.replace(/<\/div>\s*<\/div>\s*<\/section>/g, '</div>\n              </div>\n            </div>\n            </section>');
    
    fs.writeFileSync(filename, content);
}

reverseFix('pages/OtelCozumlerimizPage.tsx');
reverseFix('pages/OtelProjelerimizPage.tsx');
