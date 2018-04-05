import VueAvatarEditor from '@/components/VueAvatarEditor';

export default {
    components: {
        VueAvatarEditor
    },
    methods: {
        saveClicked (img) {
            this.$refs.image.src = img.toDataURL();
        }
    }
};
