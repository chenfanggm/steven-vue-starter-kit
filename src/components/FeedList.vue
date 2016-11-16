<template>
  <ul class="feed-list">
    <li v-for="n in maxFeeds" transition="stagger" stagger="100">
      <feed-box :feed-index="n"></feed-box>
    </li>
  </ul>
</template>

<script>
import FeedBox from './FeedBox'

export default {
  components: { FeedBox },
  props: {
    maxFeeds: { type: Number, required: true }
  }
}
</script>

<style lang="scss">
  @import '../styles/constants';

  .feed-list {
    list-style-type: none;
    margin-top: 1rem;
    padding-left: 0;
  }
</style>
