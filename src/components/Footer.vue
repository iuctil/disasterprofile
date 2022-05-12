<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'
import { mapState, mapGetters, } from 'vuex'

import Menu from '../components/Menu.vue'

export default defineComponent({
    components: {
        Menu,
    },
    computed: {
        ...mapState(['config']),
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
                <h2>{{config.siteName}}</h2>
                <p><a href="https://ctil.iu.edu/">Indiana University / CTIL</a></p>
                <Menu class="menu"/>
            </div>
            <!--
            <div class="col col-2">
                <h3>Follow&nbsp;Us</h3>
                <p class="menu">
                    <a href="https://twitter.com">Twitter</a>
                    <a href="https://youtube.com">YouTube</a>
                </p>
            </div>
            -->
            <div class="col">
                <h3>Feedback</h3>
                <p>Please send MyDisasterProfile team your comments at <a href="mailto:ctil@iu.edu">ctil@iu.edu</a></p>
            </div>
            <div class="col">
                <h3>Newsletter</h3>
                <p>Sign up to be informed whenever there is new or updated data, 
                    methodologies, or visualizations, typically once every few months.
                </p>
                <p>
                    <!-- Begin Mailchimp Signup Form -->
                    <div id="mc_embed_signup">
                    <form action="https://ctil.us14.list-manage.com/subscribe/post?u=0dddd27d906aa2b7bb27246ea&amp;id=049f34aed5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                        <p>
                            <input type="email" value="" placeholder="Enter Email Address" name="EMAIL" class="required email" id="mce-EMAIL">
                        </p>
                        <div id="mce-responses">
                            <div class="response" id="mce-error-response" style="display:none"></div>
                            <div class="response" id="mce-success-response" style="display:none"></div>
                        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0dddd27d906aa2b7bb27246ea_049f34aed5" tabindex="-1" value=""></div>
                            <div class="optionalParent">
                                <div class="clear foot">
                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
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
    margin-top: 60px;
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
