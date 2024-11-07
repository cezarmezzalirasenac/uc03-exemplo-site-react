import './Card.css'

const languages = [
  { languageName: "Python", path: "/python/python-original-wordmark.svg" },
  { languageName: "Java", path: "/java/java-original-wordmark.svg" },
  { languageName: "JavaScript", path: "/javascript/javascript-original.svg" },
  { languageName: "C#", path: "/csharp/csharp-original.svg" },
  { languageName: "C/C++", path: "/cplusplus/cplusplus-original.svg" },
  { languageName: "PHP", path: "/php/php-original.svg" },
  { languageName: "Swift", path: "/swift/swift-original-wordmark.svg" },
  { languageName: "Rust", path: "/rust/rust-original.svg" }
]

export function Cards() {
  let randomCardsList = []
  randomCardsList = [];
  randomCardsList.push(...languages.sort(() => Math.random() - 0.5))
  randomCardsList.push(...languages.sort(() => Math.random() - 0.5))
  console.log(randomCardsList)
  return (
    <>
      <div id="cards">
        {randomCardsList.map((card, index) => {
          const id = `card-number-${index}`
          return (
            <div
              key={id}
              className="card card-turned-down"
              id={id}>
            </div>
          )
        })}
      </div>
    </>

  )
}