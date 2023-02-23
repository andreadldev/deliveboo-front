<script>
export default {
    name: "CategoryCard",
    props: {
        data: Object,
    },
};
</script>

<template>
    <div class="w-100 card m-4">
        <div class="card-body">
            <router-link :to="{ name: 'single-category', params: { slug: data.slug } }" class="btn btn-primary">{{ data.name
            }}</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>