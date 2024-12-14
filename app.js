// اختيار العنصر الذي سيتم عرض البطاقات فيه
const container = document.querySelector(".container");

// بيانات القهوة مع روابط الصور
const coffees = [
  { name: "Perspiciatis", image: "https://github.com/AlQasimMall/Pasha-taxi/blob/main/Photoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png" },
  { name: "Voluptatem", image: "https://github.com/AlQasimMall/Pasha-taxi/blob/main/Photoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png" },
  { name: "Explicabo", image: "https://github.com/AlQasimMall/Pasha-taxi/blob/main/Photoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png" },
  { name: "Rchitecto", image: "https://github.com/AlQasimMall/Pasha-taxi/blob/main/Photoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png" },
  { name: "Beatae", image: "https://github.com/AlQasimMall/Pasha-taxi/blob/main/Photoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png" },
  { name: "Vitae", image: "https://github.com/AlQasimMall/Pasha-taxi/blob/main/Photoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png" },
  { name: "Inventore", image: "https://github.com/AlQasimMall/Pasha-taxi/blob/main/Photoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png" },
  { name: "Veritatis", image: "https://github.com/AlQasimMall/Pasha-taxi/blob/main/Photoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png" },
  { name: "Accusantium", image: "https://github.com/AlQasimMall/Pasha-taxi/blob/main/Photoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png" },
];

// وظيفة لعرض القهوة
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
        <div class="card">
          <img class="card--avatar" src=${image} />
          <h1 class="card--title">${name}</h1>
          <a class="card--link" href="#">Taste</a>
        </div>
      `)
  );
  // إضافة المحتوى إلى الحاوية
  container.innerHTML = output;
};

// تنفيذ دالة العرض بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", showCoffees);