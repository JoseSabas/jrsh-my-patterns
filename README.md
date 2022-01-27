# jrsh-my-patterns

Este es un paquete con patrones

### José Rodolfo

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jrsh-my-patterns';
```

```
<ProductCard product={product} initialValues={{count:4, maxCount:10}}>
  {({reset, isMaxCountReached, maxCount, increaseBy}) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>       
  )}      
</ProductCard>
```