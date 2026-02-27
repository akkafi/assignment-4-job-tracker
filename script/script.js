let currentButton = 'all';

const buttonActive = ['bg-[#3B82F6]', 'text-white',  'border-2', 'border-slate-500', 'py-[25px]', 'px-[30px]'];
const buttonInActive = ['bg-gray-300', 'text-gray-600', 'text-black', 'py-[25px]', 'px-[30px]' ];


// All tab 
const allSectionContainer = document.getElementById('all-section-container');
const interviewSectionContainer = document.getElementById('interview-section-container');
const rejectedSectionContainer = document.getElementById('rejected-section-container');
const emptyState = document.getElementById('empty-state');
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

    // emptyState.classList.add('hidden');
    emptyState.classList.add("hidden");
    if(currentTab === 'all'){
        allSectionContainer.classList.remove('hidden');
        if(allSectionContainer.children.length < 1){
            emptyState.classList.remove('hidden');
        }
    }else if(currentTab === 'interview'){
        interviewSectionContainer.classList.remove('hidden');
          if(interviewSectionContainer.children.length < 1){
            emptyState.classList.remove('hidden');
        }
    }else{
        rejectedSectionContainer.classList.remove('hidden');
          if(rejectedSectionContainer.children.length < 1){
            emptyState.classList.remove('hidden');
        }
    }

}

// count update
const countTotal =document.getElementById('count-total');
const countInterview =document.getElementById('count-interview');
const countReject =document.getElementById('count-reject');
countTotal.innerText = allSectionContainer.children.length

currentTab(currentButton);

// All Job Container

document.getElementById('all-job-container')
.addEventListener('click', function(event){
    // console.log(event.target);
    const clickElement = event.target;
    const card = clickElement.closest('.job-card');
    const parentCard = card.parentNode;
    const statusBtn = card.querySelector('.status-btn');

    if(clickElement.classList.contains('interview')){
        // console.log('interview clicked');
        statusBtn.innerText = 'Interview';
        statusBtn.style.color = '#08e62d';
        statusBtn.style.border = '2px solid #08e62d';
        interviewSectionContainer.appendChild(card);
         updateStatus()
    } else if(clickElement.classList.contains('rejected')){
        // console.log('rejected clicked');
        statusBtn.innerText = 'Rejected';
        statusBtn.style.color = 'red';
        statusBtn.style.border = '2px solid red';
        rejectedSectionContainer.appendChild(card);
         updateStatus()
    } else if(clickElement.classList.contains('delete')){
        // console.log('delete clicked');
        parentCard.removeChild(card);
         updateStatus();
    }
})

function updateStatus(){
    const allCounts ={
        all: allSectionContainer.children.length,
        interview: interviewSectionContainer.children.length,
        rejected: rejectedSectionContainer.children.length
    };
    countTotal.innerText = allCounts.all;
    countInterview.innerText = allCounts.interview;
    countReject.innerText = allCounts.rejected;

}
 updateStatus()