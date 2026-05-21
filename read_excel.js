const xlsx = require('xlsx');
const workbook = xlsx.readFile('c:/Users/Administrator/CodeBuddy/20260517191528/1导入.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(worksheet, {header:1});
console.log(JSON.stringify(jsonData, null, 2));
