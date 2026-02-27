let currentButton = 'all';

const buttonActive = ['bg-[#3B82F6]', 'text-white',  'border-2', 'border-slate-500', 'py-[25px]', 'px-[30px]'];
const buttonInActive = ['bg-gray-300', 'text-gray-600', 'text-black', 'py-[25px]', 'px-[30px]' ];


// All tab 
const allSectionContainer = document.getElementById('all-section-container');
const interviewSectionContainer = document.getElementById('interview-section-container');
const rejectedSectionContainer = document.getElementById('rejected-section-container');
// console.log(allSectionContainer, interviewSectionContainer, rejectedSectionContainer);

function currentTab(currentTab){
    // console.log(button)
    const allTabs = ['all', 'interview', 'rejected'];
    for(const tab of allTabs){
        const buttonName = document.getElementById('tab-' + tab);
        if(tab === currentTab){
            buttonName.classList.remove(...buttonInActive)
            buttonName.classList.add(...buttonActive)
        }
        else{
            buttonName.classList.remove(...buttonActive)
            buttonName.classList.add(...buttonInActive)
        }
    }

    const sections = [allSectionContainer, interviewSectionContainer, rejectedSectionContainer];
    for(let section of sections){
        section.classList.add('hidden')
    }

    if(currentTab === 'all'){
        allSectionContainer.classList.remove('hidden')
    }else if(currentTab === 'interview'){
        interviewSectionContainer.classList.remove('hidden')
    }else{
        rejectedSectionContainer.classList.remove('hidden')
    }

}

// count update
const countTotal =document.getElementById('count-total');
const countInterview =document.getElementById('count-interview');
const countReject =document.getElementById('count-reject');

countTotal.innerText = allSectionContainer.children.length

currentTab(currentButton);