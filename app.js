// اختيار العنصر الذي سيتم عرض البطاقات فيه
const container = document.querySelector(".container");

// بيانات القهوة مع روابط الصور
const coffees = [
  { name: "Perspiciatis", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2FPhotoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png?alt=media&token=a8374a80-d851-4745-9a15-6e8cc5c432df" },
  { name: "Voluptatem", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2FPhotoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png?alt=media&token=a8374a80-d851-4745-9a15-6e8cc5c432df" },
  { name: "Explicabo", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2FPhotoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png?alt=media&token=a8374a80-d851-4745-9a15-6e8cc5c432df" },
  { name: "Rchitecto", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2FPhotoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png?alt=media&token=a8374a80-d851-4745-9a15-6e8cc5c432df" },
  { name: "Beatae", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2FPhotoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png?alt=media&token=a8374a80-d851-4745-9a15-6e8cc5c432df" },
  { name: "Vitae", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2FPhotoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png?alt=media&token=a8374a80-d851-4745-9a15-6e8cc5c432df" },
  { name: "Inventore", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2FPhotoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png?alt=media&token=a8374a80-d851-4745-9a15-6e8cc5c432df" },
  { name: "Veritatis", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2FPhotoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png?alt=media&token=a8374a80-d851-4745-9a15-6e8cc5c432df" },
  { name: "Accusantium", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2FPhotoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png?alt=media&token=a8374a80-d851-4745-9a15-6e8cc5c432df" },
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