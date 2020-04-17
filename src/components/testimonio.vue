<template>
    <div class="testimonio">
        <template>
            <b-icon-star-fill 
                variant="warning" 
                class="stars"
                font-scale="1.5"
                v-for="lleno in person.rating"
                :key="lleno"
            ></b-icon-star-fill>
            <b-icon-star 
                variant="warning" 
                class="stars"
                font-scale="1.5"
                v-for="vacio in (5 - person.rating)"
                :key="vacio"
            ></b-icon-star>
            <spam class="rating">{{person.rating}}</spam>
        </template>
        
        <div style="color: #757575;">
            <p>{{person.author}} {{recogerFecha(person.date)}}</p>
        </div>
        <h3>{{person.comment}}</h3>
        <div style="margin-top: 10px;">
            <b-button :variant="valorar(person.useful_count)" ><b-icon-heart-fill></b-icon-heart-fill> Es útil</b-button>
            <spam class="votados">{{mensajeUtil(person.useful_count)}}</spam>
        </div>
    </div>
</template>


<script>

export default {
    data(){
        return {
            fechaOpciones:{weekday: 'long',year: 'numeric', month: 'long', day: 'numeric'},
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    },
    
    props: ['person'],

    methods: {
        recogerFecha(infoFecha){
            let fecha = new Date (infoFecha);
            return fecha.toLocaleDateString('es-ES', this.fechaOpciones);
        },

        mensajeUtil(num_gente){ 
            let mensaje = '';
            switch(num_gente){
                case 3:
                    mensaje = "3 personas creen que es útil"
                    break;
                case 4:
                    mensaje = "4 personas creeís que es útil"
                    break;
                default:
                    mensaje = "Ninguna persona ha participado";
            }

            return mensaje;
        },

        valorar(valor){
            return (valor === 4) ? 'success' : 'secondary';
        }
    },
    
    
}
</script>

<style>
    .testimonio {
        border: solid #757575 1px;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
        text-align: left;
        width: 30%;
    }

    .testimonio .stars{
        margin-right: 2px;
    }

    .testimonio .rating, .votados, .nombreFecha{
        font-size: 1.1em;
        color: #757575;
        font-weight:500;
        margin-left: 10px; 
    }

    .testimonio .rating::after{
        content: ",0";
    }
</style>