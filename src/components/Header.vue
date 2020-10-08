<template>
  <fragment>
    <nav :class="['nav', 'nav-mobile', open ? 'open' : '']">
      <template v-if="open">
        <div @click="toggleOpen" class="nav-icon">
          <img src="../assets/images/icon-close.svg" role="presentation" />
        </div>
        <ul class="nav-links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </template>
      <template v-else>
        <div @click="toggleOpen" role="button" class="nav-icon">
          <img src="../assets/images/icon-hamburger.svg" role="presentation" />
        </div>
        <a href="#" class="logo">room</a>
      </template>
    </nav>
    <div class="backdrop" v-if="open" @click="toggleOpen"></div>

    <nav class="nav nav-desktop">
      <a class="logo" href="#">room</a>
      <ul class="nav-links">
        <li><a href="#">home</a></li>
        <li><a href="#">shop</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </nav>
  </fragment>
</template>

<script>
export default {
  data: function() {
    return {
      open: false,
    };
  },
  methods: {
    toggleOpen: function() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss">
.backdrop {
  position: absolute;
  top: 0;
  z-index: 80;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
}
.nav {
  position: absolute;
  z-index: 100;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 110px;
  &.open {
    background-color: white;
  }
  .nav-icon {
    position: absolute;
    left: 24px;
    font-size: 24px;
    font-weight: 600;
  }
  .logo {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1px;
    color: white;
    text-decoration: none;
  }
  .nav-links {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-left: auto;
    margin-right: 24px;
    li {
      display: inline-block;
      margin-right: 32px;
      position: relative;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        &::after {
          opacity: 1;
          width: 22px;
          transform: translate(-50%, 0px);
        }
      }
      a {
        display: block;
        height: 100%;
        font-size: 0.8rem;
        font-weight: 700;
        color: $veryDarkGray;
        letter-spacing: -1px;
        &:hover {
          text-decoration: none;
        }
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translate(-50%, -8px);
        height: 2px;
        background-color: white;
        width: 0px;
        opacity: 0;
        transition: 300ms;
      }
    }
  }
}
.nav-desktop {
  display: none;
}
@include media-breakpoint-up(md) {
  .nav-mobile {
    display: none;
  }
  .nav-desktop {
    display: flex;
    justify-content: flex-start;
    padding-left: 32px;
    .nav-links {
      margin-left: 0;
      margin-right: 0;
      li a {
        font-weight: 500;
        color: white;
      }
    }
    .logo {
      margin-right: 56px;
    }
  }
}
</style>
