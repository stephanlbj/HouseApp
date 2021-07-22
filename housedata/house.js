const houses =[

    {
       id:'1', 
       description:'Simple data, or facts, about the property such as the street address, number of bedrooms and bathrooms, square footage and asking price.', 
       title:'Beautiful Home',
       location:'Fadama Junction',img:require('../assets/home/home.jpg'),
       price:'$ 1200',
       bed:'3', couch:'1', bath:'1',
       pieces:[
         require('../assets/home/in1.jpg'),
         require('../assets/home/in2.jpg'),
         require('../assets/home/in3.jpg'),
         require('../assets/home/in4.jpg'),
         require('../assets/home/in6.jpg'),

       ],
       action:'Rent'
         
      
    },
    {
        id:'2', 
        description:'Simple data, or facts, about the property such as the street address, number of bedrooms and bathrooms, square footage and asking price.',
         title:'House with nice view', 
         location:'Dieupeul Derkle',
         img:require('../assets/home/rent1.png'), 
         price:'GHs 1800',
         bed:'2', couch:'1', bath:'2',
         pieces:[
            require('../assets/home/in1.jpg'),
            require('../assets/home/in2.jpg'),
            require('../assets/home/in3.jpg'),
            require('../assets/home/in4.jpg'),
            require('../assets/home/in6.jpg'),
   
          ],
          action:'Buy'
     },

     {
      id:'3',
       description:'Simple data, or facts, about the property such as the street address, number of bedrooms and bathrooms, square footage and asking price.', 
       title:'House with nice garden',
       location:'Ouakam',
       img:require('../assets/home/m.jpg'),
       price:'$ 2300',
       bed:'2', couch:'2', bath:'3',
       pieces:[
         require('../assets/home/in1.jpg'),
         require('../assets/home/in2.jpg'),
         require('../assets/home/in3.jpg'),
         require('../assets/home/in4.jpg'),
         require('../assets/home/in6.jpg'),

       ],
       action:'Rent'
   },
   {
       id:'4',
        description:'Simple data, or facts, about the property such as the street address, number of bedrooms and bathrooms, square footage and asking price.', 
        title:'House with nice view', 
        location:'Liberte 5',img:require('../assets/home/m1.jpg'), 
        price:'GHs 1400',
        bed:'3', couch:'2', bath:'4',
        pieces:[
         require('../assets/home/in1.jpg'),
         require('../assets/home/in2.jpg'),
         require('../assets/home/in3.jpg'),
         require('../assets/home/in4.jpg'),
         require('../assets/home/in6.jpg'),

       ],
       action:'Buy'
    },
    
    
        ]


        export default houses