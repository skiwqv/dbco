<template>
  <div class="review">
    <h1 class="review__title">Отзывы:</h1>
    <div class="review__container">
      <div class="review__images">
        <div class="review__elipse">
          <img
            src="@/assets/img/review-image/Vector.png"
            alt=""
            class="review__vector"
          />
        </div>
        <img
          src="@/assets/img/review-image/Чел.png"
          alt=""
          class="review__image"
        />
      </div>
      <div class="review__images">
        <div class="review__elipse">
          <img
            src="@/assets/img/review-image/Vector.png"
            alt=""
            class="review__vector"
          />
        </div>
        <img
          src="@/assets/img/review-image/Чел.png"
          alt=""
          class="review__image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.review {
  background-color: white;
  padding-top: 100px;
  padding-bottom: 150px;
  &__title {
    padding-left: 140px;
    font-weight: 700;
    font-style: normal;
    font-size: 40px;
    margin-bottom: 5;
    color: #078dd3;
  }
  &__container {
    display: flex;
    justify-content: space-around;
  }
  &__elipse {
    background-image: url(@/assets/img/review-image/Ellipse.png);
    width: 80px;
    height: 80px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-size: cover;
  }
  &__vector {
    width: 30px;
    height: 30px;
  }
  &__image {
    width: 500px;
    height: 300px;
  }
  &__images {
    border: 1px solid #e5e5e5;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    &__title {
      display: flex;
      padding: 0;
      justify-content: center;
    }
    &__container {
      display: flex;
      flex-direction: column;
    }
    &__vector {
      width: 15px;
      height: 15px;
    }
    &__elipse {
      width: 50px;
      height: 50px;
    }
    &__image {
      width: 400px;
      height: 300px;
    }
    &__images {
      border: none;
      padding-top: 30px;
    }
  }
}
</style>