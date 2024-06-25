// การต่อคำด้วยเครือ่งหมาย + 
let data1 = "ณัฐดนัย เบ้าทอง"
let data2 = "บางนาก"
console.log(data1 + " " + data2)
console.log(data1 + "\n" + data2)
data1 = 1
data2 = 3
console.log(data1 + data2)

// การใช้ `$` 
data1 = "ณัฐดนัย เบ้าทอง"
data2 = "บางนาก"
console.log(`ชื่อ-ที่อยู๋ : ${data1} ${data2}`)
data1 = 1
data2 = 3
console.log(`ผลลัพธ์ : ${data1+data2}`)

// การแทนที่ข้อความด้วย replaceAll()
let str = "I love you so ,I love you so"
console.log(str.replace("love","hurt"))
console.log(str.replaceAll("love", "hurt"))
console.log(str)

// การจัดรูปแบบตัวเลขด้วย padstart,padend 
str = "120"
console.log(str.padStart(8,"*"))
console.log(str.padEnd(8, "*"))

// การตรวจสอบคำขึ้นต้นและลงท้ายด้วย startsWith,endsWith 
str = "Hello Javascript"
console.log(str.startsWith("HelloP"))
console.log(str.endsWith("script"))
