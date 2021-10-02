<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'
import { mapState, mapGetters, } from 'vuex'

import Menu from '../components/Menu.vue'

export default defineComponent({
    components: {
        Menu,
    },
    computed: {
        ...mapState(['siteName']),
    },
    data() {
        return {
            newsletterEmail: ""
        }
    }
});

</script>

<template>
<footer>
    <div class="content">
        <div class="cols">
            <div class="col col-1">
                <h2>{{siteName}}</h2>
                <p>CTIL @ Indiana University</p>
                <Menu class="menu"/>
            </div>
            <div class="col col-2">
                <h3>Follow&nbsp;Us</h3>
                <p class="menu">
                    <a href="https://twitter.com">Twitter</a>
                    <a href="https://youtube.com">YouTube</a>
                </p>
            </div>
            <div class="col col-3">
                <h3>Feedback</h3>
                <p>Please send MyDisasterProfile team your comments at <a href="mailto:ctil@iu.edu">ctil@iu.edu</a></p>
            </div>
            <div class="col col-4">
                <h3>Newsletter</h3>
                <p>Sign up to be informed whenever there is new or updated data, 
                    methodologies, or visualizations, typically once every few months.
                </p>
                <p>
                    <input type="text" v-model="newsletterEmail" placeholder="Your email" style="width: 100%:"/>
                    <br><br>
                    <input type="button" value="Subscribe"/><br>
                </p>
            </div>
        </div>
        <br>
        <small>MyDisasterProfile is part of TLA project developed by CTIL at Indiana University</small>
    </div>
</footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: $primary-color-dark;
    color: white;
    padding: 60px 40px;
    line-height: 125%;
    .cols {
        display: flex;
        .col {
            padding-right: 20px;
            flex-grow: 1;
        }
    }
    h2, h3 {
        color: #fff9;
    }
    input[type='text'] {
        color: white;
    }
    a {
        color: #fff;
    }
    p {
        font-size: 90%;
    }
}

::v-deep(.menu a), 
footer .menu a {
    display: block;
    color: #fff;
    line-height: 200%;
}

footer .menu a {
    text-decoration: none;
    line-height: 200%;
}


@media screen and (max-width: 55em) {
  .col-2, .col-3 {
    display: none;
  }
}

</style>
