<script setup lang="ts">

import MySection from "~/components/MySection.vue";
import MyBlockContent from "~/components/MyBlockContent.vue";
</script>

<template>
  <MySection
      title="A propos"
      id="about"
      group_tailwind="about"
      class="lg:mb-36 mb-20">
    <About/>
  </MySection>

  <MySection
      title="Expériences"
      id="works"
      group_tailwind="works"
      class="mb-20"
  >
    <!-- Plus que pro -->
    <Work
        begin="2020"
        end="2025"
        title="Développeur Fullstack - Plus que pro"
        url="https://www.plus-que-pro.fr/"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, pariatur? Amet autem dolorum error molestias optio praesentium sequi. Accusamus aspernatur cum doloribus, ipsa ipsam magnam necessitatibus officia optio repellendus?"
        :tags="['Laravel', 'VueJs 3', 'Inertia', 'Quasar', 'Python', 'TypeScript', 'Docker', 'Git', 'SCSS', 'TailwindCSS', 'Bootstrap', 'Swagger', 'Element-plus', 'MySQL', 'Pest', 'Jest', 'Dusk', 'Agility (Scrum)']"
        section-group="works"
        class="mb-15"
    >
      <p>J'ai rejoint l'entreprise en tant que développeur fullstack.</p>
      <p>J'ai rejoint l'équipe qui gère les outils internes de l'entreprise.</p>
      <br/>
      <p>Voici une liste non exhaustive des projets sur lesquels j'ai travaillé : </p>
      <ul class="list-disc list-inside">
        <li class="text-slate-400">Application de gestion et modération d'avis client</li>
        <li class="text-slate-400">Application de gestion d'adhérents pour les commerciaux et le suivi</li>
        <li class="text-slate-400">APIs internes </li>
        <li class="text-slate-400">Formulaire d'avis client</li>
        <li class="text-slate-400">Application de présentation commerciale</li>
        <li class="text-slate-400">Utilisation de l'IA pour aider les commerciaux</li>
      </ul>

    </Work>

    <!-- Freelance -->
    <Work
        begin="2019"
        end="2020"
        title="Développeur Freelance"
        :tags="['Wordpress', 'JavaScript', 'Git', 'Scss', 'Apache', 'MySQL', 'Bootstrap', 'Photoshop']"
        section-group="works"
        class="mb-15"
    >
      <p>J'ai créé une entreprise sur laquelle j'ai été amené à travailler sur quelques sites vitrines.</p><br>
      <p>Malheureusement, en raison de la pandémie et de projets personnels j'ai dû retrouner en CDI par la suite.</p><br>
      <p>Ca été une expérience très enrichissante qui m'a donné l'occasion de voir d'autres facettes de mon métier.</p>
      <p>Voici un exemple de site sur lequel j'ai travaillé : <a class="underline text-slate-300" href="https://tellos.fr/filiales/sogeca-therm/">SOGECA THERM</a></p>
    </Work>

    <!-- Diatem -->
    <Work
        begin="2018"
        end="2019"
        url="https://www.diatem.net/"
        title="Développeur Fullstack - Diatem"
        :tags="['Wordpress', 'Drupal', 'Photoshop', 'JavaScript', 'Git', 'Scss', 'Apache', 'MySQL', 'Bootstrap']"
        section-group="works"
        class="mb-15"
    >
      <p>J'ai rejoint une agence web Diatam en tant que développeur fullstack.</p> <br/>
      <p>J'ai principalement  travaillé sur des sites vitrines sur Wordpress ou Drupal en fonction des besoins.</p><br>
      <p>J'ai aussi eu l'occasion de travailler sur des applications web pour tablettes (gestion d'entretien de station de lavage Elephant bleu)</p>
      <p>Exemple de sites : </p>
      <ul class="list-disc list-inside mt-3">
        <li class="text-slate-400"><a class="underline text-slate-300" href="https://www.theatredelachouc.com/">Théâtre de la Choucrouterie</a></li>
        <li class="text-slate-400"><a class="underline text-slate-300" href="https://www.wolfberger.com/">Wolfberger</a></li>
        <li class="text-slate-400"><a class="underline text-slate-300" href="https://www.escal.fr/">Escal</a></li>
      </ul>
    </Work>

    <!-- Covline -->
    <Work
        begin="2014"
        end="2018"
        url="https://www.covline.com/"
        title="Support applicatif - Covline"
        :tags="['WebDev', 'Sql Server', 'Widows Server', 'Talend', 'Java', 'Redmine']"
        section-group="works"
    >
      <p>Pour mon premier travail, j'ai rejoint l'entreprise Covline en tant que support applicatif</p> <br/>
      <p>Je m'occupais du support n°1 et n°2 et de l'installation du produit sur des serveurs Windows chez les clients</p>
      <p>Etant une petite structure, j'ai très vite été amené à étendre mes fonctions en : </p>
      <ul class="list-disc list-inside mt-3">
        <li class="text-slate-400">Réalisant du développement spécifique pour les clients</li>
        <li class="text-slate-400">Accompagnent le chef de projet pour la partie technique</li>
        <li class="text-slate-400">Réalisation d'exports peronnalisés</li>
      </ul>
    </Work>
  </MySection>

  <!--
  <MySection
      title="Mes projets"
      id="projects"
      group_tailwind="projects"
      class="lg:mt-36"
  >
    <Project
        img-path="/img/projects/project1.jpg"
        title="Mon project 1"
        url="http://google.com"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, pariatur? Amet autem dolorum error molestias optio praesentium sequi. Accusamus aspernatur cum doloribus, ipsa ipsam magnam necessitatibus officia optio repellendus?"
        :tags="['Laravel', 'JavaScript']"
        section-group="projects"
        class="mb-15"
    />
  </MySection>
    -->

</template>

<style scoped>

</style>