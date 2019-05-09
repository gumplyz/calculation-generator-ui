<template>
    <div class="searchform">
        <label for="numQuestions">Number of Questions</label>
        <input type="number" class="form-control" id="numQuestions" required v-model="parameters.numQuestions"
               name="numQuestions">
        <h4>Addition</h4>
        <div class="form-group" id="addition">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Max</span>
                </div>
                <select class="form-control" id="add-max" required v-model="parameters.add.max" name="add-max">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                </select>
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Number of Operands</span>
                </div>
                <input type="number" class="form-control" placeholder="2" aria-label="Number of Operands" aria-describedby="basic-addon1" v-model="parameters.add.numOps">
            </div>
        </div>
        <h4>Substraction</h4>
        <div class="form-group" id="substraction">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Max</span>
                </div>
                <select class="form-control" id="substract-max" required v-model="parameters.substract.max"
                        name="substract-max">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                </select>
            </div>
        </div>

        <div class="btn-group">
            <button v-on:click="generate" class="btn btn-success">Generate</button>
        </div>

        <ul class="result list-group">
            <li class="list-group-item" v-for="(question, index) in questions" :key="index">
                {{question}}
            </li>
        </ul>
    </div>
</template>

<script>
    import http from "../http-common";

    export default {
        name: "CalculationGenerator",
        data() {
            return {
                parameters: {
                    numQuestions: 1000,
                    "add": {
                        "max": 10,
                        "numOps":2
                    },
                    "substract": {
                        "max": 10
                    }
                },
                questions: []
            };
        },
        methods: {
            /* eslint-disable no-console */
            generate() {
                http
                    .post("/math/calculation/generator", this.parameters)
                    .then(response => {
                        this.questions = response.data; // JSON are parsed automatically.
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
            /* eslint-enable no-console */
        }
    }
</script>

<style scoped>

</style>