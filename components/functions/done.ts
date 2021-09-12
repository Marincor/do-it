


export  function doneOnRender(atribute) {
    if (atribute != null) {
        atribute.forEach((item) => {
        const currentTr = document.getElementById(item);


        if (currentTr) {
          currentTr.classList.add("done");
        }
      });
    }
  }




  export  function doneOnClick(e) {
    const currentTr = e.target.previousSibling;


    if (currentTr.classList.contains("done")) {
      const vetorDone = JSON.parse(localStorage.getItem("Done"));

      const index = vetorDone.indexOf(currentTr.id);
      if (index > -1) {
        vetorDone.splice(index, 1);
      }

      localStorage.setItem("Done", JSON.stringify(vetorDone));

      currentTr.classList.remove("done");
    } else {
      const vetorDone = JSON.parse(localStorage.getItem("Done")) || [];
      vetorDone.push(currentTr.id);

      localStorage.setItem("Done", JSON.stringify(vetorDone));

      currentTr.classList.add("done");
    }
  }

