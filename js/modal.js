const modal = (id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    fetch(url).then(res => res.json()).then(data => displayModalData(data.data));
    
    const displayModalData = (wordData) => {
        const {word,meaning, pronunciation, sentence, synonyms} = wordData || {};
        const [first, second, third] = synonyms || [];
    const modalContainer = document.getElementById("modal-container");
    const card = document.createElement("div");
    card.classList.add("absolute", "z-10", "w-96", "bg-white", "rounded-lg", "p-6", "text-left", "border-2", "border-borderColor");
    card.innerHTML = `
            <h4 class="text-2xl font-semibold mb-5">${word} (<i class="fa-solid fa-microphone-lines"></i> : <span class="font-bengaliFont">${pronunciation}</span>)</h4>
            <p class="font-medium mb-2">Meaning</p>
            <p class="text-xl font-semibold font-bengaliFont mb-5">${meaning}</p>
            <h5 class="font-semibold text-lg mb-2">Example</h5>
            <p class="text-grayColor mb-5">${sentence}</p>
            <p class="font-bengaliFont text-lg font-medium mb-2">সমার্থক শব্দ গুলো</p>
            <div id="synonyms-container" class="flex gap-3 mb-5">
            <span class="bg-[#edf7ffd8] px-4 py-2 text-grayColor rounded-lg"> ${first} </span>
            <span class="bg-[#edf7ffd8] px-4 py-2 text-grayColor rounded-lg"> ${second} </span>
            <span class="bg-[#edf7ffd8] px-4 py-2 text-grayColor rounded-lg"> ${third} </span>
            </div>
            <button onClick="completeBtn()"
              class="bg-DarkBlueColor text-white font-medium px-5 py-2 rounded-sm cursor-pointer"
            >
              Complete Learning
            </button>
    `
    modalContainer.appendChild(card);
    }
    
}
