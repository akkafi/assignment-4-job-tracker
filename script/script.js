let currentButton = 'all';

const buttonActive = ['bg-[#3B82F6]', 'border-[#3B82F6]', 'text-white'];
const buttonInActive = ['bg-gray-300', 'text-gray-500', 'border-slate-200', 'text-black']
function switchTab(button){
    console.log(button)
    const tabs = ['all', 'interview', 'rejected'];
    for(const t of tabs){
        const buttonName = document.getElementById('tab-' + t);
        if(t === button){
            buttonName.classList.remove(...buttonInActive)
            buttonName.classList.add(...buttonActive)
        }
        else{
            buttonName.classList.remove(...buttonActive)
            buttonName.classList.add(...buttonInActive)
        }
    }
}
switchTab(currentButton);