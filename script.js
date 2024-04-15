var tl=gsap.timeline()



tl.from("#logo,#elements" ,{
    y:-500,
    delay:0.5,
    opacity:0,
    duration:0.8,
    stagger:0.2,
  }) 
tl.from("#tagline h1",{
    x:-800,
    opacity:0,
    duration:0.8,
  })
tl.from("#hero-img img",{
    scale:0,
    opacity:0,
    duration:0.8,
  })
tl.to("#hero-img img,#page1-image img,#page4-img img",{
    y:50,
    repeat:-1,
    duration:2,
    yoyo:true,  
  })
/*tl.from("#page1" ,{
    scale:0.7,
    scrollTrigger:{
    trigger:"#page1",
    scroller:"body",
    end:"top 30%",
    scrub:4,
    
    }
  
  })*/
tl.from("#page1-info h1,#page1-info p,#page1-image img",{
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
      trigger:"#page1-info h1,#page1-info p,#page1-image img",
       scroller:"body",
      start:"top 85%",
      end:"top 60%",
      scrub:5,
    }
  })

  tl.from("#page3-info h1",{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
    trigger:"#page3-info h1",
    scroller:"body",
    start:"top 80%",
    end:"top 56%",
    scrub:5,
    
    }
  })
  tl.from("#row1 ",{
    x:600,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
      trigger:"#row1 ",
      scroller:"body",
      start:"top 75%",
      end:"top 45%",
      scrub:5,
      
    }
  })                            
  