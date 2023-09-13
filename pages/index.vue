<template>
    <div class="flex container mx-auto w-100">
        <DropdownDropdown1 />
        <!-- card -->
        <CardsCard v-for="(item, i) in card" :key="i"
            :title="item.title"
            :description="item.description" 
            :buttonText="item.buttonText"
            :modalId="item.modalId"
        />
        <CardsCard1 
                    progress="1" 
                    statusDataBadgeColor="red"
                    statusDataColor="blue"
                    status="true"
                    title="pouria"
                    description="pouria rahimy front end developer"

        />
        <CardsCard2 />
        <CardsCard3 avatar="https://cdn.penlms.com/images/course-person1.png" name="maryam lameh" />
        <CardsCard4 />
    </div>
  </template>   
  
  <script setup>


  const card = ref([
        {
            title: 'pouria',
            description: 'rahimi',
            buttonText: 'click',
            image: '@/assets/img/1.png',
            modalId: '1',
        }
  ])


  </script>
  