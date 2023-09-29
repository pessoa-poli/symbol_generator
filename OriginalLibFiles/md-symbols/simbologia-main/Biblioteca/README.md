# Extensão da lib milsymbol para o padrão MD33-M-02

O padrão de simbologia das Forças Armadas brasileiras (descrito no Manual M33-M-02, 4ª versão) é derivado do APP-6(D), padrão em uso pela OTAN.

## Uso

```javascript
import ms from 'md33-m-02-milsymbol'

// Podemos ativar ou desativar o uso das extensões do MD33-M-02
ms.useMD33(true) //esse é o padrão
// Podemos, ainda, ativar ou desativar a exibição do octógono de referência (para debug).
ms.drawOctagon(false) // esse também é o padrão

// O uso da biblioteca segue a documentação da milsymbol original.
let sidc = "..."
let options = {
    // ...
}
let symbol = new ms.Symbol(sidc, options)
```


## Desenvolvimento

Essa extensão da milsymbol possui 3 módulos:
  - iconparts
  - sidcmapping
  - symbolextensions

### iconparts

Módulo que define o conteúdo usado pela função [ms.addIconParts](https://github.com/spatialillusions/milsymbol/tree/master/docs#msaddiconpartsiconfunction) para modificar/criar partes de ícones que podem ser usadas na composição de símbolos.
 - Um exemplo de modificação de íconPart existente seria para traduzir um termo que semanticamente é compatível na doutrina da OTAN e na nossa.
 - Um exemplo de inclusão de símbolos são tanto um símbolo para substituir um conceito que a OTAN já usa, quanto incluir partes que só existem para as nossa extensão (Ex: Selva)

Esse módulo diz como se desenha um conceito, mapeando um identificador (Ex: "BR.MD.Ter.Ud.M1.Selva") em um array de Draw Instructions

### sidcmapping

Módulo que define como símbolos são compostos por conjuntos de iconParts.
Para sidc já existentes na milsymbol, usado para mandar nao renderizar um símbolo para nao conflitar com a extensão, ou para modificar o símbolo por um já existente.


### symbolextensions

Módulo que trata como devemos ler os 10 dígitos extras da extensão do sidc.
E similar ao sidcmapping, vai mapear esses dígitos em arrays de iconparts que devem ser usados para geração do símbolo, coma  diferença que o sidcmapping é para o sidc de 20 dígitos e este módulo para a extensão.


## Build
npm install && npm run build
