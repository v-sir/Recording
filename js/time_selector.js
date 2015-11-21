function time_selector(){
	var x=$('#month').val();
	var y=$('#year').val();
	var i;
	i=x/1
	switch (i){
		case 02:{if (y=="1996"||y=="1992"||y=="2000"||y=="2004"||y=="2008")
				    $("#day").html("<option>01</option>"+"<option>02</option>"+"<option>03</option>"
					        	+"<option>04</option>"+"<option>05</option>"+"<option>06</option>"
					        	+"<option>07</option>"+"<option>08</option>"+"<option>09</option>"
					        	+"<option>10</option>"+"<option>11</option>"+"<option>12</option>"
					        	+"<option>13</option>"+"<option>14</option>"+"<option>15</option>"
					        	+"<option>16</option>"+"<option>17</option>"+"<option>18</option>"
					        	+"<option>19</option>"+"<option>20</option>"+"<option>21</option>"
					        	+"<option>22</option>"+"<option>23</option>"+"<option>24</option>"
					        	+"<option>25</option>"+"<option>26</option>"+"<option>27</option>"
					        	+"<option>28</option>");
				else
					$("#day").html("<option>01</option>"+"<option>02</option>"+"<option>03</option>"
					        	+"<option>04</option>"+"<option>05</option>"+"<option>06</option>"
					        	+"<option>07</option>"+"<option>08</option>"+"<option>09</option>"
					        	+"<option>10</option>"+"<option>11</option>"+"<option>12</option>"
					        	+"<option>13</option>"+"<option>14</option>"+"<option>15</option>"
					        	+"<option>16</option>"+"<option>17</option>"+"<option>18</option>"
					        	+"<option>19</option>"+"<option>20</option>"+"<option>21</option>"
					        	+"<option>22</option>"+"<option>23</option>"+"<option>24</option>"
					        	+"<option>25</option>"+"<option>26</option>"+"<option>27</option>"
					        	+"<option>28</option>"+"<option>29</option>");}break;
		case 01:case 03:case 05:case 07:case 08:case 10:case 12:{
			$("#day").html("<option>01</option>"+"<option>02</option>"+"<option>03</option>"
					        	+"<option>04</option>"+"<option>05</option>"+"<option>06</option>"
					        	+"<option>07</option>"+"<option>08</option>"+"<option>09</option>"
					        	+"<option>10</option>"+"<option>11</option>"+"<option>12</option>"
					        	+"<option>13</option>"+"<option>14</option>"+"<option>15</option>"
					        	+"<option>16</option>"+"<option>17</option>"+"<option>18</option>"
					        	+"<option>19</option>"+"<option>20</option>"+"<option>21</option>"
					        	+"<option>22</option>"+"<option>23</option>"+"<option>24</option>"
					        	+"<option>25</option>"+"<option>26</option>"+"<option>27</option>"
					        	+"<option>28</option>"+"<option>29</option>"+"<option>30</option>"
					        	+"<option>31</option>");}break;
		case 04:case 06:case 09:case 11:{
			$("#day").html("<option>01</option>"+"<option>02</option>"+"<option>03</option>"
					        	+"<option>04</option>"+"<option>05</option>"+"<option>06</option>"
					        	+"<option>07</option>"+"<option>08</option>"+"<option>09</option>"
					        	+"<option>10</option>"+"<option>11</option>"+"<option>12</option>"
					        	+"<option>13</option>"+"<option>14</option>"+"<option>15</option>"
					        	+"<option>16</option>"+"<option>17</option>"+"<option>18</option>"
					        	+"<option>19</option>"+"<option>20</option>"+"<option>21</option>"
					        	+"<option>22</option>"+"<option>23</option>"+"<option>24</option>"
					        	+"<option>25</option>"+"<option>26</option>"+"<option>27</option>"
					        	+"<option>28</option>"+"<option>29</option>"+"<option>30</option>");}break;

		
			  }
}
