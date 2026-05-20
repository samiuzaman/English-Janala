// selected Element
const lessionBtnContainer = document.getElementById("lession-btn-container");
const selectedesLessionContainer = document.getElementById("selected-lession-container");

// Load Lession Category Button
const loadLessionBtn = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url).then(res => res.json()).then(lession => displayLessionBtn(lession.data));

    const displayLessionBtn = (lessionBtn) => {
    lessionBtn.forEach(lession => {
    const {level_no, lessonName} = lession || {};
    const btn = document.createElement("div");
    btn.innerHTML = `
    <button id="dl-btn" class=" flex gap-1 items-center border-2 border-DarkBlueColor px-3 py-2 rounded-sm text-DarkBlueColor cursor-pointer hover:bg-[#412ad51b]">
    <img class="w-4 h-4" src="./assets/fa-book-open.png"/>
    <p> Lesson-<span class="${level_no}">${level_no}</span></p> 
    </button>`
     lessionBtnContainer.appendChild(btn);
    });
  };
  
};
loadLessionBtn();


lessionBtnContainer.addEventListener("click", (e) => {
    document.getElementById("no-lession-selected").classList.add("hidden");
        const btnEl = e.target.parentElement;
        const btnId = btnEl.querySelector("span").innerText;
        fetch(`https://openapi.programming-hero.com/api/level/${btnId}`).then(res => res.json()).then(wordslist => displaylessonWord(wordslist.data));

         // display lesson categories word
        const displaylessonWord = (wordslist) => {
            selectedesLessionContainer.innerText = "";
        console.log(wordslist);
        wordslist.forEach(singleWord => {
            const div = document.createElement("div");
            div.classList.add("bg-white", "rounded-lg", "py-6", "space-y-3");
            div.innerHTML = `
            <h3 class="font-semibold text-[21px]">${singleWord?.word}</h3>
            <p class="text-black font-medium text-[19px] font-bengaliFont">"${singleWord?.pronunciation}"</p>
            <p class="text-xl font-bold text-grayColor font-bengaliFont">${singleWord?.meaning}</p>
            `
            selectedesLessionContainer.appendChild(div);
        })
    }
     });