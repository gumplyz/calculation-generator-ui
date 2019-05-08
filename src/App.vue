<template>
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h1>1 Calculation Generator</h1>

        </div>
        <nav>

            <router-link class="btn btn-primary" to="/generator">Calculation Generator</router-link>
        </nav>
        <br/>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}

.btn-primary {
  margin-right: 5px;
}

</style>