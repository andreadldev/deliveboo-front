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
            <h5 class="card-title">{{ data.name }}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>