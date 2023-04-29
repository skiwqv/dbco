<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__languageSelector">
        <span class="header__text">ru</span>
        <span class="header__text">en</span>
      </div>
      <div class="header__logo">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="DBCO"
        /></router-link>
      </div>
      <ul class="header__menu">
        <li>
          <router-link
            to="/"
            class="header__link"
            active-class="header__link_active"
            >Главная</router-link
          >
        </li>
        <li>
          <router-link
            to="/resource"
            class="header__link"
            active-class="header__link_active"
            >Решения dbco</router-link
          >
        </li>
        <li><a href="#" class="header__link">Ресурсы</a></li>
        <li>
          <router-link
            to="/register"
            active-class="header__link_active"
            class="header__link"
            >Мой кабинет</router-link
          >
        </li>
      </ul>
      <div class="header__search">
        <input type="text" />
        <button type="submit">
          <img src="@/assets/img/лупа.png" alt="Search" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style lang="scss" scoped>
$header-background: #fff;
$header-border-color: #e5e5e5;
$header-link-color: #c2c2c2;
$header-link-hover-color: #078fd3;
$header-search-input-border-color: #c1c1c1;

.header {
  font-family: "Opel Sans";
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

    img {
      width: 331px;
      height: 100px;
    }
  }

  &__menu {
    display: flex;
    list-style: none;

    li + li {
      margin-left: 30px;
    }

    .header__link {
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
  }

  &__search {
    display: flex;
    align-items: center;
    margin-left: 40px;

    input {
      border: 1px solid #333333;
      border-radius: 7px;
      width: 255px;
      height: 30px;
    }

    button {
      width: 40px;
      height: 40px;
      margin-left: 20px;
      border: none;
      background-color: transparent;
      cursor: pointer;

      img {
        height: 20px;
      }
    }
  }
}
</style>