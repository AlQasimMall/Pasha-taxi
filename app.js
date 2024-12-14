// اختيار العنصر الذي سيتم عرض البطاقات فيه
const container = document.querySelector(".container");

// بيانات القهوة مع روابط الصور
const coffees = [
  { name: "Perspiciatis", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/PriceInHand-main%2F7da94f84-c767-466c-b0d3-b7bb852fd5e7.webp?alt=media&token=83c906f1-292a-4629-819b-3d137c911737" },
  { name: "Voluptatem", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/PriceInHand-main%2F7da94f84-c767-466c-b0d3-b7bb852fd5e7.webp?alt=media&token=83c906f1-292a-4629-819b-3d137c911737" },
  { name: "Explicabo", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/PriceInHand-main%2F7da94f84-c767-466c-b0d3-b7bb852fd5e7.webp?alt=media&token=83c906f1-292a-4629-819b-3d137c911737" },
  { name: "Rchitecto", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/PriceInHand-main%2F7da94f84-c767-466c-b0d3-b7bb852fd5e7.webp?alt=media&token=83c906f1-292a-4629-819b-3d137c911737" },
  { name: "Beatae", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/PriceInHand-main%2F7da94f84-c767-466c-b0d3-b7bb852fd5e7.webp?alt=media&token=83c906f1-292a-4629-819b-3d137c911737" },
  { name: "Vitae", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/PriceInHand-main%2F7da94f84-c767-466c-b0d3-b7bb852fd5e7.webp?alt=media&token=83c906f1-292a-4629-819b-3d137c911737" },
  { name: "Inventore", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/PriceInHand-main%2F7da94f84-c767-466c-b0d3-b7bb852fd5e7.webp?alt=media&token=83c906f1-292a-4629-819b-3d137c911737" },
  { name: "Veritatis", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/PriceInHand-main%2F7da94f84-c767-466c-b0d3-b7bb852fd5e7.webp?alt=media&token=83c906f1-292a-4629-819b-3d137c911737" },
  { name: "Accusantium", image: "https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/PriceInHand-main%2F7da94f84-c767-466c-b0d3-b7bb852fd5e7.webp?alt=media&token=83c906f1-292a-4629-819b-3d137c911737" },
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