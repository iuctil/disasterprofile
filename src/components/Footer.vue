<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'

import Menu from '../components/Menu.vue'

export default defineComponent({
    components: {
        Menu,
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
            <div class="col">
                <h3>MyDisasterProfile</h3>
                <Menu class="menu"/>
            </div>
            <div class="col">
                <h3>Follow Us</h3>
                <p class="menu">
                    <a href="https://twitter.com">Twitter</a>
                    <a href="https://youtube.com">YouTube</a>
                </p>
            </div>
            <div class="col">
                <h3>Feedback</h3>
                <p>Please send MyDisasterProfile team your comments at <a href="mailto:ctil@iu.edu">ctil@iu.edu</a></p>
            </div>
            <div class="col">
                <h3>Newsletter</h3>
                <p>Sign up to be informed whenever there is new or updated data, 
                    methodologies, or visualizations, typically once every few months.
                </p>
                <br><br>
                <p style="display: flex;">
                    <input type="text" v-model="newsletterEmail" placeholder="Your email" style="flex-grow: 1;"/>
                    <input type="button" value="Subscribe"/>
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
    background-color: #037;
    padding: 60px 40px;
    line-height: 125%;
    color: #fff;
    .cols {
        display: flex;
        .col {
            padding-right: 20px;
            width: 25%;
        }
    }
    h3 {
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

</style>
