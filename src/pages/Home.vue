<template>
  <div class="home">
    <div>
      <label for="maxFeeds">Number of feeds to show:</label>
      <input id="maxFeeds" v-model="maxFeeds" />
    </div>
    <ul class="feed-list">
      <li v-for="n in maxFeedsFromString" transition="stagger" stagger="100">
        <feed-box :feed-index="n"></feed-box>
      </li>
    </ul>
  </div>
</template>

<script>
import FeedBox from '../components/FeedBox'

export default {
  data() {
    return {
      maxFeeds: 15
    }
  },
  computed: {
    maxFeedsFromString() {
      return parseInt(this.maxFeeds)
    }
  },
  components: {
    FeedBox
  }
}
</script>

<style lang="scss">
  @import "../styles/animation";

  .home {
    width: 100%;
    height: 100%;

    >.feed-list {
      list-style-type: none;
      margin-top: 1rem;
      padding-left: 0;
    }
  }
</style>
