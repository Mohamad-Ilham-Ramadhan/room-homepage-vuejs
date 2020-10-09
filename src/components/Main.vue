<template>
  <section>
    <div class="row no-gutters">
      <div class="col-xs-12 col-md-7 p-relative">
        <img
          v-if="showMobileHero"
          class="slide-hero"
          src="@/assets/images/mobile-image-hero-1.jpg"
          alt
        />
        <img
          v-if="showDesktopHero"
          class="slide-hero"
          src="@/assets/images/desktop-image-hero-1.jpg"
          alt
        />

        <div class="navigation">
          <button class="navigation-btn prev">
            <span class="wrapper">
              <img src="@/assets/images/icon-angle-left.svg" alt />
            </span>
          </button>
          <button class="navigation-btn next">
            <span class="wrapper">
              <img src="@/assets/images/icon-angle-right.svg" alt />
            </span>
          </button>
        </div>
      </div>
      <div class="col-xs-12 col-md-5">
        <div class="slide-desc">
          <h1 class="h3 slide-title">Discover innovative ways to decorate</h1>
          <p class="slide-content">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <a class="slide-shop-now" href="#">
            SHOP NOW
            <span>
              <!-- <img src="@/assets/images/icon-arrow.svg" alt /> -->
              <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="about row no-gutters">
      <div class="col-xs-12 col-lg">
        <img src="@/assets/images/image-about-dark.jpg" alt />
      </div>
      <div class="col-xs-12 col-lg-5">
        <div class="about-desc">
          <h2 class="about-title">about our furniture</h2>
          <p
            class="about-content"
          >Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
      </div>
      <div class="col-xs-12 col-lg">
        <img class="about-img-light" src="@/assets/images/image-about-light.jpg" alt />
      </div>
    </div>
  </section>
</template>

<script>
import hero1Mobile from "@/assets/images/mobile-image-hero-1.jpg";
import hero1Desktop from "@/assets/images/desktop-image-hero-1.jpg";
import hero2Mobile from "@/assets/images/mobile-image-hero-2.jpg";
import hero2Desktop from "@/assets/images/desktop-image-hero-2.jpg";
import hero3Mobile from "@/assets/images/mobile-image-hero-3.jpg";
import hero3Desktop from "@/assets/images/desktop-image-hero-3.jpg";
import { vueWindowSizeMixin } from "vue-window-size";
export default {
  mixins: [vueWindowSizeMixin],
  data: function() {
    return {
      slides: [
        {
          id: 1,
          mobileImg: hero1Mobile,
          desktopImg: hero1Desktop,
          title: "Discover innovative ways to decorate",
          content:
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
          id: 2,
          mobileImg: hero2Mobile,
          desktopImg: hero2Desktop,
          title: "We are available all across the globe",
          content: `with stores all over the world. It's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont's hesitate to contact us today.`
        },
        {
          id: 3,
          mobileImg: hero3Mobile,
          desktopImg: hero3Desktop,
          title: "Manufactured with the best materials",
          content: `Our modern furniture store provide a hight level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
        }
      ]
    };
  },
  computed: {
    showMobileHero: function() {
      return this.windowWidth < 768;
    },
    showDesktopHero: function() {
      return this.windowWidth >= 768;
    }
  }
};
</script>

<style lang="scss">
.slide-hero {
  width: 100%;
  max-height: 400px;
  @include media-breakpoint-up(md) {
    max-height: unset;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.slide-desc {
  padding: 72px 32px;
  text-align: left;
  @include media-breakpoint-up(md) {
    padding-top: 40px;
  }
  @include media-breakpoint-up(lg) {
    padding: 80px 40px 100px;
  }
  @include media-breakpoint-up(xl) {
    padding: 114px 96px 150px;
  }
  .slide-title {
    font-weight: 600;
    color: black;
    letter-spacing: -1px;
    line-height: 1.2;
    margin-bottom: 16px;
    @include media-breakpoint-up(xl) {
      font-size: 2.45rem;
      margin-bottom: 24px;
    }
  }
  .slide-content {
    margin-bottom: 48px;
    @include media-breakpoint-up(md) {
      margin-bottom: 16px;
    }
    @include media-breakpoint-up(lg) {
      margin-bottom: 24px;
    }
  }
  .slide-shop-now {
    color: black;
    font-size: 0.775rem;
    letter-spacing: 10px;
    &:hover {
      color: $darkGray;
      text-decoration: none;
      svg {
        fill: $darkGray !important;
      }
    }
    span {
      margin-left: 24px;
      vertical-align: text-bottom;
    }
  }
}
.navigation {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
  @include media-breakpoint-up(md) {
    transform: translateX(100%);
  }
  .navigation-btn {
    background-color: black;
    border: none;
    padding: 20px 22px;
    cursor: pointer;
    @include media-breakpoint-up(xl) {
      padding: 28px 32px;
    }
    &:focus {
      outline: unset;
    }
    &:hover {
      background-color: $veryDarkGray;
    }
    .wrapper {
      display: flex;
      align-items: center;
      height: 16px;
      overflow: hidden;
      @include media-breakpoint-up(xl) {
        height: 24px;
      }
    }
  }
}
// About section
.about-desc {
  padding: 56px 32px 40px;
  text-align: left;
  .about-title {
    text-transform: uppercase;
    font-size: 0.755rem;
    font-weight: 700;
    letter-spacing: 5px;
    color: black;
    margin-bottom: 12px;
  }
}
.about-img-light {
  object-fit: cover;
  height: 226px;
  width: 100%;
}
</style>
