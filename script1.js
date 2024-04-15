tl.from("#page2-info h1 ,#page2-info p,#page2-info button,#girl img,#phone img",{
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
      trigger:"#page2-info h1 ,#page2-info p,#page2-info button,#girl img,#phone img ",
    scroller:"body",
      start:"top 85%",
      end:"top 50%",
      scrub:4,
    }
  })
  tl.from("#row2 ",{
    x:-600,
    opacity:0,
    duration:0.5,
    stagger:0.4,
    scrollTrigger:{
      trigger:"#row2 ",
      scroller:"body",
      
      start:"top 90%",
      end:"top 70%",
      scrub:5,
    }
  })
  tl.from("#page4-img img,#page4-info h1,#page4-info p",{
    x:600,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
      trigger:"#page4-img img,#page4-info h1,#page4-info p ",
       scroller:"body",
      
      start:"top 60%",
      end:"top 40%",
      scrub:5,
    }
  })             
                