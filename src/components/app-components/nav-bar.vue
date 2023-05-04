<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__languageSelector">
        <span class="header__text">ru</span>
        <span class="header__text">en</span>
      </div>
      <div class="header__logo">
        <router-link to="/">
          <img
            src="@/assets/img/nav-image/logo.png"
            class="header__logo-image"
            alt="DBCO"
        /></router-link>
      </div>
      <ul class="header__menu" v-for="link in links" :key="link.name">
        <li>
          <router-link
            :to="link.to"
            class="header__link"
            active-class="header__link_active"
            >{{ link.name }}</router-link
          >
        </li>
      </ul>
      <div class="header__search">
        <input type="text" class="header__input" />
        <button type="submit" class="header__icon-search">
          <img src="@/assets/img/nav-image/лупа.png" alt="Search" />
        </button>
      </div>
      <div>
        <button class="header__nav-button" @click="show = !show">
          <img
            src="@/assets/img/nav-image/nav-icon.png"
            alt="nav"
            class="header__nav-icon"
          />
          <ul v-if="show" class="header__nav-menu">
            <li v-for="link in links" :key="link.name" class="header__li">
              <router-link
                :to="link.to"
                class="header__link"
                active-class="header__link_active"
                >{{ link.name }}</router-link
              >
            </li>
          </ul>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      links: [
        {
          name: "Главная",
          to: "/",
        },
        {
          name: "Решения dbco",
          to: "resource",
        },
        {
          name: "Ресурсы",
          to: "/res",
        },
        {
          name: "Мой кабинет",
          to: "/register",
        },
      ],
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
$header-background: #fff;
$header-border-color: #e5e5e5;
$header-link-color: #c2c2c2;
$header-link-hover-color: #078fd3;
$header-search-input-border-color: #c1c1c1;

.header {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 25px;
  background-color: $header-background;

  &__nav {
    display: flex;
    align-items: center;
  }
  &__languageSelector {
    display: flex;
    align-items: center;
  }
  &__text {
    font-size: 18px;
    font-weight: bold;
    color: $header-link-color;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #2d9cd8;
    }
  }

  &__logo {
    margin-right: 40px;
    margin-left: 40px;
  }

  &__menu {
    display: flex;
    list-style: none;

    li + li {
      margin-left: 30px;
    }
  }
  &__link {
    text-decoration: none;
    font-size: 20px;
    color: $header-link-color;
    transition: color 0.3s ease-in-out;
    &_active {
      color: $header-link-hover-color;
    }

    &:hover {
      color: $header-link-hover-color;
    }
  }

  &__search {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  &__icon-search {
    width: 18px;
    height: 18px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  &__input {
    border: 1px solid #333333;
    border-radius: 7px;
    height: 30px;
  }
  &__nav-menu {
    background-color: $header-link-color;
    padding: 0;
    margin: 0;
    height: 100vh;
    top: 0;
    z-index: 4;
    list-style: none;
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: stretch;
  }
  &__nav-icon {
    width: 30px;
    height: 30px;
    margin-left: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  &__nav-button {
    width: 30px;
    height: 30px;
    margin-left: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  @media (min-width: 769px) {
    &__nav-menu {
      display: none;
    }
    &__nav-icon {
      display: none;
    }
  }
  @media (max-width: 768px) {
    &__li {
      display: flex;
      padding: 0;
      margin: 0;
    }
    &__link {
      color: white;
      text-decoration: none;
      padding-top: 20px;
      align-self: center;
      width: 100%;
      font-size: 20px;
      transition: all 0.3s;
      &_active {
        background-color: $header-link-hover-color;
      }

      &:hover {
        color: white;
        background-color: $header-link-hover-color;
      }
    }
    &__menu {
      display: none;
    }
    &__logo {
      width: 200px;
      height: 100px;
    }
    &__logo-image {
      width: 100%;
      height: 100%;
    }
    &__search {
      height: 30px;
      width: 100px;
      margin: 0;
      display: flex;
      align-items: flex-start;
    }
    &__input {
      height: 15px;
      width: 100px;
    }
  }
}
</style>