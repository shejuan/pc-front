import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './element.vue'


@Component({
    name: 'demo-element',
    mixins: [template],
    components: {
    }
})
export default class Element extends Vue {

}
