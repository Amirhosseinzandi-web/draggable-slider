let sliderContainer = document.querySelector(".slider-container")
    let slider = document.querySelector(".slider")
    let _mousePosition
    let clicked = false

    sliderContainer.addEventListener("mousedown" , (event)=>{
        sliderContainer.style.cursor = "grabbing"
        _oldPosition = event.offsetX - slider.offsetLeft
         clicked = true
        // console.log( _mousePosition)
    })
    sliderContainer.addEventListener("mouseup" , ()=>{
        sliderContainer.style.cursor = "grab"
        //  clicked = false
        clicked = false
    })

    sliderContainer.addEventListener("mousemove" , (event)=>{
        if(clicked==true){
            event.preventDefault()
            newPosition = event.offsetX
            slider.style.left =  (newPosition - _oldPosition) + "px"
        }
        update()
        
    })

    function update(){
        let inner = slider.getBoundingClientRect()
        let outer = sliderContainer.getBoundingClientRect()
        
        if(parseInt(slider.style.left)>=0){
            slider.style.left = 0 + "px"
        }
        else if(inner.right<outer.right){
            slider.style.left = (outer.width - inner.width) + "px"
        }
        // console.log(slider.style.left)
    }