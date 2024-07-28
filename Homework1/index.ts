function BMI(weight_KG: number, height_M: number) {
    return weight_KG / height_M **2
    
    }
    
console.log ( BMI (80, 1.85))

function calculate(weight_KG: number, height_M: number) {
    let BMI: number = weight_KG / height_M **2

    if (BMI < 18.5) {
        return "ผอม เสี่ยงโรคมากกว่าคนปกติ"
    } else if (BMI > 18.5 && BMI < 22.9) {
        return "ปกติ เท่าคนปกติ"
    } else if (BMI > 23 && BMI < 24.9) {
        return "ท้วม อันตรายระดับ1"
    } else if (BMI > 25 && BMI < 29.9) {
        return "อ้วน อันตรายระดับ2"
    } else if (BMI < 30) {
        return "อ้วนมาก อันตรายระดับ3"
    }
}

console.log ( calculate (80, 1.85))