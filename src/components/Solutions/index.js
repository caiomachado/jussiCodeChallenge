import React from 'react';
import { Container } from './styles';

const solutionsData = [
  {
    name: "Nome do Produto #1",
    image: "P1",
    description: "Descrição do produto #1",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    urlPath: "#",
    id: Math.random()
  },
  {
    name: "Nome do Produto #2",
    image: "P2",
    description: "Descrição do produto #2",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    urlPath: "#",
    id: Math.random()
  },
  {
    name: "Nome do Produto #3",
    image: "P3",
    description: "Descrição do produto #3",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    urlPath: "#",
    id: Math.random()
  },
  {
    name: "Nome do Produto #4",
    image: "P4",
    description: "Descrição do produto #4",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    urlPath: "#",
    id: Math.random()
  }
]

const Solutions = () => {
  return (
    <Container id="solutions">
      <div className="wrapper">
        <div className="block-title">
          <h2><span>//</span>NOSSAS SOLUÇÕES</h2>
        </div>
        <div className="solutions-wrap">
          {solutionsData && solutionsData.length > 0 && solutionsData.map((solution) => (
            <div className="solution" key={solution.id}>
              <div className="solution-image">
                <span>{solution.image}</span>
              </div>
              <h3>{solution.name}</h3>
              <h4>{solution.description}</h4>
              <ul>
                {solution.features && solution.features.length > 0 && solution.features.map((item) => (
                  <li key={item}>{`🞄 ${item}`}</li>
                ))}
              </ul>
              <a href={solution.urlPath} target="_blank" rel="noreferrer">
                <button>Ver Solução</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Solutions;