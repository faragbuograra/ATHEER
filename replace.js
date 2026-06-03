const fs = require('fs');

// Replace Contacts text inside translations.js
let trans = fs.readFileSync('./src/data/translations.js', 'utf8');

const arContact = `contact: {
      title: "تواصل معنا",
      md: "المدير العام: info@asalibship.com",
      sales: "قسم المبيعات: inquiry@asalibship.com",
      forwarding: "قسم الشحن: forwarding-department@asalibship.com",
      fdept1: "قسم 1: fw.dept01@asalibship.com",
      fdept2: "قسم 2: fw.dept02@asalibship.com",
      marketing: "قسم التسويق: marketing@asalibship.com",
      chartering: "قسم الاستئجار: chartering@asalibship.com",
      docs: "قسم الوثائق: docs@asalibship.com",
      ops: "قسم العمليات: operation@asalibship.com",
      accounts: "قسم المحاسبة: Accounting-Department@asalibship.com"
    }`;

const enContact = `contact: {
      title: "Contact Us",
      md: "Managing Director: info@asalibship.com",
      sales: "Sales department: inquiry@asalibship.com",
      forwarding: "Forwarding manager: forwarding-department@asalibship.com",
      fdept1: "F. dept 01: fw.dept01@asalibship.com",
      fdept2: "F. dept 02: fw.dept02@asalibship.com",
      marketing: "Marketing dept: marketing@asalibship.com",
      chartering: "Chartering dept: chartering@asalibship.com",
      docs: "Documentation dept: docs@asalibship.com",
      ops: "Ops department: operation@asalibship.com",
      accounts: "A/C dept: Accounting-Department@asalibship.com"
    }`;

    
trans = trans.replace(/contact: \{[\s\S]*?(?=\},\n\s+footer:)/, arContact);
trans = trans.replace(/contact: \{[\s\S]*?(?=\},\n\s+footer:)/, enContact);

fs.writeFileSync('./src/data/translations.js', trans);
