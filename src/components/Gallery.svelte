<div class="flex flex-col justify-center items-center">
    <div class="grid-container">
        <slot></slot>
     </div>
</div>

<style>
.grid-container {
  columns: 6 180px;
  column-gap: 1rem;
  width: 90%;
  margin: 0 auto;
}

:global(.grid-container > .cards-row) {
  width: 10px;
  margin: 0 1.5rem 1.5rem 0;
  display: inline-block;
  width: 100%;
  border: solid 2px black;
  background-color: #fff;
  padding: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
}
:global(.grid-container div:hover img) {
  filter: grayscale(0);
 
}
:global(.grid-container div:hover) {
  border-color: coral;
}
:global(.grid-container div img) {
  width: 100%;
  filter: grayscale(100%);
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
}
</style>