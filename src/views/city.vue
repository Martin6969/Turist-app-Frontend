<template>
<div>
    <div class="container">
        <br><br><br><br><br><br><br>
        <h2>Dodajte grad</h2>
		<form id="contact" method="post" action="">

				<div class="line">
						<label for="name">Grad: </label>
						<input v-model="grad" type="text" name="name" id="name">
				</div>

				<div class="line">
						<label for="slika">Slika grada: </label>
						<input v-model="slika" type="text" name="city_image" id="city_image">
				</div>

				<div class="line">
						<label for="grad">Kratki opis grada: </label>
						<textarea v-model="opis_grada" name="text" id="city" rows="7" cols="4"></textarea>
				</div>

                <!--<div class="line">
                    <div class="selectdiv">
                        <label>
                            <select v-model="regija">
                                <option>Centralna Hrvatska</option>
                                <option>Dalmacija</option>
                                <option>Istra</option>
                                <option>Slavonija</option>
                            </select>
                        </label>
                    </div>
                </div>-->
                <div class="line">
                    <div class="selectdiv">
                        <label>
                            <select v-model="zupanija">
                                <option>Krapinsko-zagorska županija</option>
                                <option>Sisačko-moslavačka županija</option>
                                <option>Karlovačka županija</option>
                                <option>Varaždinska županija</option>
                                <option>Koprivničko-križevačka županija</option>
                                <option>Bjelovarsko-bilogorska županija</option>
                                <option>Ličko-senjska županija</option>
                                <option>Virovitičko-podravska županija</option>
                                <option>Požeško-slavonska županija</option>
                                <option>Brodsko-posavska županija</option>
                                <option>Zadarska županija</option>
                                <option>Vukovarsko-srijemska županija</option>
                                <option>Splitsko-dalmatinska županija</option>
                                <option>Istarska županija</option>
                                <option>Dubrovačko-neretvanska županija</option>
                                <option>Međimurska županija</option>
                                <option>Grad Zagreb</option>
                            </select>
                        </label>
                    </div>
                </div>
                <br><br><br><br><br><p v-if="poruka===true" style="color:red;font-size:17px">Popunite sve podatke!</p>
				<div class="line">
						<input @click.prevent="send_city()" type="submit" name="submit" value="Pošalji" class="button">
				</div>

		</form>
    </div>
</div>
</template>

<script>
import { cityData } from '@/service/index.js'
export default {
  data:function(){
    return{
      grad:'',
      slika:'',
      opis_grada:'',
      regija:'',
      zupanija:'',
      poruka:false
    }
  },
  methods: {
    async send_city(){
      if(this.grad=="" || this.slika=="" || this.opis_grada=="" || this.zupanija==""){
        this.poruka = true;
      }
      else
      {
        let city_data = {
            grad:this.grad,
            slika:this.slika,
            opis_grada:this.opis_grada,
            regija:this.regija,
            zupanija:this.zupanija
        }
        console.log(city_data)
        await cityData.sendData(city_data)
        this.$router.push({path:'/'});
      }
    }
  }
}
</script>


<style scoped>
    /* ======== Media Queries */
@media only screen and (min-width : 240px) {
	
	h1 {
			font: 500 200%/100% Ubuntu;
			margin: 0 0 30px 10px;
	}
	
	label {
		display: block;
		margin: 0 0 10px 10px;
	}
	
	#contact label {
		width: 23%;
		font-size: 150%;
		text-align: left;
	}
	
	#contact input[type=text],
	#contact input[type=email],
	#contact textarea {
		width: 94.3%;
		font-size: 100%;
		margin-left: 10px;		
	}
	
	#contact .button {
		margin-left: 10px;
		font-size: 130%;
	}
}


@media only screen and (min-width : 480px) {
	
	h1 {
			font: 500 160%/100% Ubuntu;
			margin: 0 0 20px 10px;
	}
	
	label,
	input{display: inline-block}
	
	#contact label {
		font-size: 100%;
		width: 20%;
		text-align: right;
	}
	
	#contact label[for=message] {vertical-align: top}
		
	#contact input[type=text],
	#contact input[type=email],
	#contact textarea {			
			width: 66.6667%;
	}
	
	#contact .button {
		margin-left: 24%;
		font-size: 90%;
	}
}



/* ======== Positioning */
.container {
		max-width: 600px;
}

/* ======== Divider */
.line {
		clear: both;
		padding: 15px 0;
		border-top: 1px solid #EBEBEB;
}

/* ======== inputs */
#contact input[type=text],
#contact input[type=email],
#contact textarea {
		color: #666;		
		box-sizing: border-box;
		border: 1px solid #CCC;
		border-radius: 3px;
		padding: 5px 8px;
}

#contact input[type=text],
#contact input[type=email]{height: 40px}

#contact textarea {
		font-family: Ubuntu;
		overflow: auto; /* Removing default Scrollbar from IE */
}

#contact input[type=text]:focus,
#contact input[type=email]:focus,
#contact textarea:focus {
		outline: none;
		box-shadow: inset 1px 2px 3px #CCC;
}

/* Submit button */
#contact .button {
		padding: 10px 15px;
		border: 1px solid green;
		border-radius: 3px;
		color: #CFE6FC;
		font-family: Ubuntu;
		font-weight: 300;
		background-color: green;
		background-image: linear-gradient(rgb(6, 59, 6), green);
		-o-background-image: linear-gradient(rgb(6, 59, 6), green);
		cursor: pointer;
}

#contact .button:hover {
		-webkit-transition: all 0.5s ease-in-out 0s;
		-moz-transition: all 0.5s ease-in-out 0s;
		-o-transition: all 0.5s ease-in-out 0s;
		transition: all 0.5s ease-in-out 0s;
		background-image: linear-gradient(rgb(6, 59, 6), green);
		-o-background-image: linear-gradient(rgb(6, 59, 6), green);
		color: #FFF;
		box-shadow: 2px 2px 3px #999;
}

.selectdiv {
  position: relative;
  /*Don't really need this just for demo styling*/
  float: left;
  margin-left:120px;
}

/* IE11 hide native button (thanks Matt!) */
select::-ms-expand {
display: none;
}

.selectdiv:after {
  content: '<>';
  font: 17px "Consolas", monospace;
  color: #333;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  right: 11px;
  /*Adjust for position however you want*/
  
  top: 18px;
  padding: 0 0 2px;
  border-bottom: 1px solid #999;
  /*left line */
  
  position: absolute;
  pointer-events: none;
}

.selectdiv select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Add some styling */
  
  display: block;
  min-width: 320px;
  height: 50px;
  margin: 5px 0px;
  padding: 0px 24px;
  font-size: 16px;
  line-height: 1.75;
  color: #333;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  -ms-word-break: normal;
  word-break: normal;
}
</style>