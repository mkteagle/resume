/**
 * Created by mkteagle on 10/3/15.
 */
var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}
$(function () {

    showText("#msg", "Hello, World!", 0, 500);

});
window.onload = function () {
    var dropZoneOne = document.querySelector('#delta');
    var dropZoneTwo = document.querySelector('#ihc');
    var dropZoneThree = document.querySelector('#usu');
    var dropZoneFour = document.querySelector('#travelhost');
    var dropZoneFive = document.querySelector('#techmedia');
    var dropZoneSix = document.querySelector('#verizon');
    var dropZoneSeven = document.querySelector('#xactware');
    var dropZoneEight = document.querySelector('#matc');

    var dragElements = document.querySelectorAll('#draggable-items li');
    var elementDragged = null;
    for (var i = 0; i < dragElements.length; i++) {
        dragElements[i].addEventListener('dragstart', function (e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', this.innerHTML);
            elementDragged = this;
        });
        dragElements[i].addEventListener('dragend', function (e) {
            elementDragged = null;
        });
    }
    ;
    dropZoneOne.addEventListener('dragover', function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    });
    dropZoneOne.addEventListener('dragenter', function (e) {
        this.className = "over";
    });
    dropZoneOne.addEventListener('dragleave', function (e) {
        this.className = "";
    });
    dropZoneOne.addEventListener('drop', function (e) {
        if (e.preventDefault)e.preventDefault();
        if (e.stopPropagation)e.stopPropagation();
        this.className = "";
        this.innerHTML = e.dataTransfer.getData('text');
        document.querySelector('#draggable-items').removeChild(elementDragged);
        elementDragged = null;
        return false;
    });
    dropZoneTwo.addEventListener('dragover', function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    });
    dropZoneTwo.addEventListener('dragenter', function (e) {
        this.className = "over";
    });
    dropZoneTwo.addEventListener('dragleave', function (e) {
        this.className = "";
    });
    dropZoneTwo.addEventListener('drop', function (e) {
        if (e.preventDefault)e.preventDefault();
        if (e.stopPropagation)e.stopPropagation();
        this.className = "";
        this.innerHTML = e.dataTransfer.getData('text');
        document.querySelector('#draggable-items').removeChild(elementDragged);
        elementDragged = null;
        return false;
    });

    dropZoneThree.addEventListener('dragover', function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    });
    dropZoneThree.addEventListener('dragenter', function (e) {
        this.className = "over";
    });
    dropZoneThree.addEventListener('dragleave', function (e) {
        this.className = "";
    });
    dropZoneThree.addEventListener('drop', function (e) {
        if (e.preventDefault)e.preventDefault();
        if (e.stopPropagation)e.stopPropagation();
        this.className = "";
        this.innerHTML = e.dataTransfer.getData('text');
        document.querySelector('#draggable-items').removeChild(elementDragged);
        elementDragged = null;
        return false;
    });

    dropZoneFour.addEventListener('dragover', function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    });
    dropZoneFour.addEventListener('dragenter', function (e) {
        this.className = "over";
    });
    dropZoneFour.addEventListener('dragleave', function (e) {
        this.className = "";
    });
    dropZoneFour.addEventListener('drop', function (e) {
        if (e.preventDefault)e.preventDefault();
        if (e.stopPropagation)e.stopPropagation();
        this.className = "";
        this.innerHTML = e.dataTransfer.getData('text');
        document.querySelector('#draggable-items').removeChild(elementDragged);
        elementDragged = null;
        return false;
    });

    dropZoneFive.addEventListener('dragover', function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    });
    dropZoneFive.addEventListener('dragenter', function (e) {
        this.className = "over";
    });
    dropZoneFive.addEventListener('dragleave', function (e) {
        this.className = "";
    });
    dropZoneFive.addEventListener('drop', function (e) {
        if (e.preventDefault)e.preventDefault();
        if (e.stopPropagation)e.stopPropagation();
        this.className = "";
        this.innerHTML = e.dataTransfer.getData('text');
        document.querySelector('#draggable-items').removeChild(elementDragged);
        elementDragged = null;
        return false;
    });

    dropZoneSix.addEventListener('dragover', function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    });
    dropZoneSix.addEventListener('dragenter', function (e) {
        this.className = "over";
    });
    dropZoneSix.addEventListener('dragleave', function (e) {
        this.className = "";
    });
    dropZoneSix.addEventListener('drop', function (e) {
        if (e.preventDefault)e.preventDefault();
        if (e.stopPropagation)e.stopPropagation();
        this.className = "";
        this.innerHTML = e.dataTransfer.getData('text');
        document.querySelector('#draggable-items').removeChild(elementDragged);
        elementDragged = null;
        return false;
    });

    dropZoneSeven.addEventListener('dragover', function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    });
    dropZoneSeven.addEventListener('dragenter', function (e) {
        this.className = "over";
    });
    dropZoneSeven.addEventListener('dragleave', function (e) {
        this.className = "";
    });
    dropZoneSeven.addEventListener('drop', function (e) {
        if (e.preventDefault)e.preventDefault();
        if (e.stopPropagation)e.stopPropagation();
        this.className = "";
        this.innerHTML = e.dataTransfer.getData('text');
        document.querySelector('#draggable-items').removeChild(elementDragged);
        elementDragged = null;
        return false;
    });

    dropZoneEight.addEventListener('dragover', function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    });
    dropZoneEight.addEventListener('dragenter', function (e) {
        this.className = "over";
    });
    dropZoneEight.addEventListener('dragleave', function (e) {
        this.className = "";
    });
    dropZoneEight.addEventListener('drop', function (e) {
        if (e.preventDefault)e.preventDefault();
        if (e.stopPropagation)e.stopPropagation();
        this.className = "";
        this.innerHTML = e.dataTransfer.getData('text');
        document.querySelector('#draggable-items').removeChild(elementDragged);
        elementDragged = null;
        return false;
    });
    var list = document.getElementById("draggable-items");
    function shuffleNodes() {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.sort.call(nodes);
        while(i < nodes.length) {
            list.appendChild(nodes[i]);
            ++i;
        }
    }
    shuffleNodes();
};
