// Display  data
function load()
	{
		let check=JSON.parse(localStorage.getItem('notes'))
		
		let data="";
		
		check.forEach((elm,index)=>
			{
				data+=
					`
			<div class="card my-2 mx-2  " style="width: 18rem;">
				    <div class="card-body">
				    <h5 class="card-title">${elm.title}</h5>
				    <p class="card-text">${elm.note}</p>
				    <button id="${index}" onclick="deleteBtn(this.id)"  class="btn btn-primary">Delete</a>
				 		</div>
		 	</div>
					`
			})
		
		let information=document.getElementById('information')
		information.innerHTML=data;
	
	}

// Delete data

function deleteBtn(del)
	{
	let notesObj=localStorage.getItem('notes')

	if(notesObj==null)
	{
		 users=[];
	}
	else{
		users=JSON.parse(notesObj)
	}

	users.splice(del,1)
	localStorage.setItem('notes',JSON.stringify(users))

	load()
	}


// search data
let search=document.getElementById('searchTxt')
search.addEventListener('input',()=>
	{
		let value=search.value;	
		let card=document.getElementsByClassName('card');
	
		Array.from(card).forEach((elm)=>
			{
				let data=elm.getElementsByTagName('p')[0].innerText

				if(data.includes(value))
				{
					elm.style.display="block"
				}
				else{
					elm.style.display="none"
					
				}

				
			})
	
	})



let addBtn=document.getElementById('addBtn')
addBtn.addEventListener('click',(e)=>
	{
		e.preventDefault()
		let title=document.getElementById('title')
		let note=document.getElementById('note')
	
		let obj={
		title:title.value,
		note:note.value
		}
	
	let notesObj=localStorage.getItem('notes')
	
	if(notesObj==null)
	{
		 users=[];
	}
	else{
		users=JSON.parse(notesObj)
	}

	users.push(obj)
	localStorage.setItem('notes',JSON.stringify(users))

	title.value='',
	note.value=''
	
	load()
	})

load()