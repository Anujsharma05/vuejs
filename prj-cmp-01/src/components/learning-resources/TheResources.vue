<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>

    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
    import AddResource from './AddResource'
    import StoredResources from './StoredResources'

    export default {
        name: 'TheResources',
        components: {
            AddResource,
            StoredResources
        },
        data: function() {
            return {
                selectedTab: 'stored-resources',
                storedResources: [
                    {
                        id: 'official-guide',
                        title: 'Official Guide',
                        description: 'The Official Vue Js Documentation',
                        link: 'https://vuejs.org'
                    },
                    {
                        id: 'google',
                        title: 'Google',
                        description: 'Learn to Google...',
                        link: 'https://google.com'
                    }
                ]
            }
        },
        methods: {
            setSelectedTab: function(tab) {
                this.selectedTab = tab;
            },
            addNewResource: function(title, desc, link) {
                const newResource = {
                    id: new Date().toISOString(),
                    title: title,
                    desc: desc,
                    link: link
                }

                this.storedResources.unshift(newResource);
                this.selectedTab = 'stored-resources';
            },
            deleteStoredResource: function(index) {

                // const indexFromId = this.storedResources.findIndex(res => res.id === idFromInject);
                this.storedResources.splice(index , 1);
            }
        },
        provide: function() {
            return {
                resources: this.storedResources,
                newResource: this.addNewResource,
                deleteResource: this.deleteStoredResource
            }
        },
        computed: {
            storedResButtonMode() {
                return this.selectedTab === 'stored-resources' ? null : 'flat';
            },
            addResButtonMode() {
                return this.selectedTab === 'add-resource' ? null : 'flat';
            }
        }
    }
</script>

<style scoped>

    base-button {
      margin: 1rem;  
    }
</style>