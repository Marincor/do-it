export default function deleteOnClick(e) {
    const currentTr = e.target.previousSibling.previousSibling;
    const currentDoneButton = e.target;
    const currentDeleteButton = e.target.previousSibling;


    const vetorDone = JSON.parse(localStorage.getItem("DoiT"));

    const index = vetorDone.indexOf(JSON.parse(currentTr.id));
    if (index > -1) {
      vetorDone.splice(index, 1);
    }

    const newArray =  vetorDone.filter(function( obj ) {
      return obj.id !== JSON.parse(currentTr.id);
  });


  currentTr.remove()
  currentDoneButton.remove()
  currentDeleteButton.remove()
  localStorage.setItem("DoiT", JSON.stringify( newArray))
  window.location.href='/'
    
  }