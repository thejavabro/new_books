//@@ ch01-paradoxes
CH({slug:"ch01-paradoxes",n:"1",part:"Introduction",sub:"What logic studies, and what happens when sentences talk about themselves.",end:"Correctness lives in the form.",scenes:[
VS("What logic is about","Not",["Whether the premises are true"],"But",["Whether the conclusion follows from them"],["A correct argument can have false premises. An incorrect one can have a true conclusion."],"→","muted","blue"),
VS("Correctness lives in the form","Content",["All cats are mammals. Tom is a cat."],"Form",["All A are B. x is an A. So x is a B."],["Any argument of that shape is correct, whatever A and B are."],"→","amber","green"),
PT("A taste of paradox",[["The liar","“This sentence is false.”","blue"],["Jourdain’s card","Each side says the other is false, or true.","green"],["Heterological","A word that describes itself only if it does not.","purple"],["Berry","“The least number not definable in under twenty words.”","amber"]],["Each has no stable truth value."]),
VS("What the paradoxes teach","The cause",["Self-reference, with no restriction"],"The response",["Formal languages with precise rules","Truth defined level by level"],["Logic as a tool begins by being careful about language."],"→","red","green"),
RC("Introduction",[["Logic","Studies what follows."],["Form","Carries correctness."],["Liar","Has no truth value."],["Self-reference","Is the hazard."],["Formal languages","Are the cure."],["Tool","For reasoning."]])
]});
//@@ ch02-truth-tables
CH({slug:"ch02-truth-tables",n:"2",part:"Chapter 1 · Propositional logic",sub:"Building statements from simple parts, and computing their truth.",end:"The truth of the whole is fixed by the truth of the parts.",scenes:[
PT("Five connectives",[["Negation","Not A.","blue"],["Conjunction","A and B.","green"],["Disjunction","A or B, or both.","purple"],["Implication","If A then B.","amber"],["Biconditional","A if and only if B.","red"]],["A proposition is a sentence that is true or false."]),
VS("Why “false implies anything” is true","The worry",["If A is false, how can “if A then B” be true?"],"The reading",["It is a promise","A promise is broken only when A is true and B is false"],["An implication fails in exactly one row of its table."],"→","amber","green"),
PT("Three kinds of formula",[["Tautology","True in every row.","blue"],["Contradiction","False in every row.","green"],["Satisfiable","True in at least one.","purple"]],["A truth table lists every assignment of truth values."]),
VS("A smarter check","Full table",["Two to the power n rows"],"Hunt for a falsifier",["Assume the formula false","Work backwards","A clash means it is a tautology"],["This idea becomes the tableau method."],"→","amber","green"),
RC("Section 1.1",[["Proposition","True or false."],["Connectives","Five."],["Implication","Fails in one case."],["Table","Every assignment."],["Tautology","Always true."],["Falsify","Then look for a clash."]])
]});
//@@ ch03-consequence-equivalence
CH({slug:"ch03-consequence-equivalence",n:"3",part:"Chapter 1 · Propositional logic",sub:"When one statement follows from others, and when two say the same thing.",end:"True in, true out.",scenes:[
VS("Logical consequence","Definition",["Whenever all the premises are true, the conclusion is true"],"Test",["Look for an assignment with true premises and a false conclusion","None exists"],["Consequence is about every possible case."],"and","blue","green"),
VD("Sound and unsound rules",[["Modus ponens: A, and if A then B, so B",true,"Truth is preserved.","SOUND","green"],["Modus tollens: not B, and if A then B, so not A",true,"Truth is preserved.","SOUND","green"],["Affirming the consequent: B, and if A then B, so A",false,"B may be true for another reason.","UNSOUND","red"],["Denying the antecedent: not A, and if A then B, so not B",false,"Same flaw.","UNSOUND","red"]],["A rule is sound if it never leads from truths to a falsehood."],{sw:200}),
PT("Relatives of an implication",[["Original","If A then B.","blue"],["Converse","If B then A.","green"],["Inverse","If not A then not B.","purple"],["Contrapositive","If not B then not A.","amber"]],["Only the contrapositive is equivalent to the original."]),
PT("Equivalences worth knowing",[["De Morgan","Not (A and B) is not A or not B.","blue"],["Double negation","Not not A is A.","green"],["Implication","If A then B is not A or B.","purple"],["Distribution","And over or, and or over and.","amber"]],["Push negations inward to reach negation normal form."]),
RC("Sections 1.2–1.3",[["Consequence","True in, true out."],["Sound rules","Preserve truth."],["Fallacies","Look similar."],["Contrapositive","Equivalent."],["De Morgan","For negations."],["Normal form","Negations inside."]])
]});
//@@ ch04-induction
CH({slug:"ch04-induction",n:"4",part:"Chapter 1 · Propositional logic",sub:"Defining infinite sets by construction, and proving things about them.",end:"An inductive definition is a construction manual.",scenes:[
PL("An inductive definition",[["Base","The starting objects."],["Rules","How to build new ones from old.","blue"],["Closure","Nothing else belongs.","green"]],["Formulas are defined this way: atoms, then connectives applied to formulas."],{tc:"blue"}),
PL("Proof by structural induction",[["Base case","The property holds for the starting objects."],["Step","If it holds for the parts, it holds for what is built.","blue"],["Conclusion","It holds for everything.","green"]],["Induction follows the construction."],{tc:"blue"}),
VS("Recursive definitions","Inductive definition",["Says what the objects are"],"Recursive definition",["Computes something for each object","By following how it was built"],["The truth value of a formula is defined recursively."],"and","blue","purple"),
VS("Unique readability","With brackets",["Each formula is built in exactly one way"],"Without",["“A and B or C” can be read two ways"],["Recursion needs a unique construction, or the answer is ambiguous."],"→","green","red"),
RC("Section 1.4",[["Inductive","Base, rules, closure."],["Structural induction","Follows the build."],["Well-founded","Orders generalise it."],["Recursion","Computes along it."],["Unique","Readability."],["Brackets","Earn their keep."]])
]});
//@@ ch05-axiomatic-systems
CH({slug:"ch05-axiomatic-systems",n:"5",part:"Chapter 2 · Deduction",sub:"Replacing truth with rule-following.",end:"A derivation is a game of symbols.",scenes:[
VS("Semantics and deduction","Semantics",["What is true","Checked by truth tables"],"Deduction",["What can be derived","Checked step by step"],["The aim is for the two to agree."],"and","blue","purple"),
PT("The system H",[["A few axiom schemes","Patterns, with any formulas plugged in.","blue"],["One rule","Modus ponens.","green"],["A derivation","A list where each line is an axiom, a premise, or follows by the rule.","purple"]],["Axiomatic systems are economical to define, and awkward to use."]),
VS("A first derivation","The claim",["A implies A"],"In H",["Several lines of substitution and modus ponens"],["Even the obvious needs work when the system has so little."],"→","green","amber"),
VS("The Deduction Theorem","Without",["Derive “A implies B” directly"],"With",["Assume A","Derive B","Conclude “A implies B”"],["The key meta-result that makes H bearable."],"→","red","green"),
RC("Sections 2.1–2.2",[["Deduction","Symbols and rules."],["Hilbert style","Axioms plus one rule."],["Modus ponens","The rule."],["Derivations","Are long."],["Deduction Theorem","Shortens them."],["Goal","Match semantics."]])
]});
//@@ ch06-tableaux
CH({slug:"ch06-tableaux",n:"6",part:"Chapter 2 · Deduction",sub:"Proving by trying, and failing, to find a counterexample.",end:"Proof by failed counterexample.",scenes:[
PL("The method",[["Assume","Premises true, conclusion false."],["Decompose","Each formula, by its rule.","blue"],["Branch","When there are two ways.","purple"],["Close","A branch with a contradiction.","red"],["All closed?","Then no counterexample exists.","green"]],["If a branch stays open, it describes a counterexample."],{tc:"blue"}),
VS("Two kinds of rule","Non-branching",["“A and B is true”: both are true"],"Branching",["“A or B is true”: one branch for each"],["Apply non-branching rules first to keep the tree small."],"and","green","amber"),
VS("What an open branch tells you","Closed tableau",["The argument is valid"],"Open branch",["Read off the truth values","That assignment refutes it"],["The method proves, or produces a counterexample."],"or","green","blue"),
PL("From English to a tableau",[["Identify","The atomic statements."],["Formalise","Premises and conclusion.","blue"],["Run","The tableau.","purple"],["Read","The result.","green"]],["Formalising is often the harder part."],{tc:"blue"}),
RC("Section 2.3",[["Tableau","A tree of cases."],["Assume","The opposite."],["Decompose","By rule."],["Close","On contradiction."],["Open","Means a counterexample."],["Order","Non-branching first."]])
]});
//@@ ch07-natural-deduction
CH({slug:"ch07-natural-deduction",n:"7",part:"Chapter 2 · Deduction",sub:"Formal proofs that follow the way people argue.",end:"Each connective has a rule to introduce it, and a rule to use it.",scenes:[
PT("Introduction and elimination",[["Introduction","How to prove a formula of this shape.","blue"],["Elimination","How to use one you have.","green"],["Assumptions","May be made, then discharged.","purple"]],["Two rules for every connective."]),
VD("Rules in everyday proof",[["To prove “if A then B”: assume A, derive B",true,"Implication introduction.","INTRO","blue"],["From “A and B”, take A",true,"Conjunction elimination.","ELIM","purple"],["From “A or B”: show the goal from each",true,"Proof by cases.","ELIM","purple"],["Assume not A, reach a contradiction, conclude A",true,"Proof by contradiction.","CLASSICAL","amber"]],["The rules formalise familiar moves."],{sw:220}),
VS("Which rule do I reach for?","Look at the goal",["Its main connective suggests an introduction rule"],"Look at the premises",["Their main connectives suggest elimination rules"],["Work backwards from the goal and forwards from the premises."],"and","blue","green"),
VS("The intuitionistic twist","Classical",["Proof by contradiction is allowed"],"Intuitionistic",["Drop it","A proof must construct what it claims"],["The same system, minus one rule, gives a different logic."],"VS","blue","purple"),
RC("Section 2.4",[["Natural","Like real proofs."],["Intro","Proves a shape."],["Elim","Uses a shape."],["Assumptions","Discharged."],["Tactics","Goal and premises."],["Intuitionistic","No contradiction rule."]])
]});
//@@ ch08-resolution-sat
CH({slug:"ch08-resolution-sat",n:"8",part:"Chapter 2 · Deduction",sub:"A single rule that machines can apply.",end:"One rule to rule them all.",scenes:[
PT("Normal forms",[["Literal","A variable or its negation.","blue"],["Clause","A disjunction of literals.","green"],["CNF","A conjunction of clauses.","purple"],["DNF","A disjunction of conjunctions.","amber"]],["Every formula has an equivalent in each form."]),
PL("Clausal resolution",[["Convert","Premises and the negated conclusion to clauses."],["Pick","Two clauses with a complementary pair.","blue"],["Resolve","Merge them, dropping the pair.","purple"],["Empty clause?","Contradiction: the argument is valid.","green"]],["From “A or B” and “not A or C”, infer “B or C”."],{tc:"blue"}),
VS("SAT","Checking",["Given an assignment, evaluate the formula","Fast"],"Solving",["Find an assignment, or show none exists","No fast method is known"],["The first problem shown to be NP-complete."],"VS","green","red"),
VS("Why these systems are complete","Sound",["Everything derivable is valid"],"Complete",["Everything valid is derivable"],["Tableaux, natural deduction and resolution all have both properties."],"and","blue","green"),
RC("Sections 2.5–2.7",[["Clauses","Disjunctions of literals."],["CNF","What resolution needs."],["Resolution","One rule."],["Empty clause","Means contradiction."],["SAT","Easy to check."],["Complete","All the systems are."]])
]});
//@@ ch09-first-order-languages
CH({slug:"ch09-first-order-languages",n:"9",part:"Chapter 3 · First-order logic",sub:"A richer language, for talking about objects and their relations.",end:"Propositional logic cannot look inside a statement.",scenes:[
VS("Why go further","Propositional",["“Socrates is mortal” is one atom"],"First-order",["Objects, properties, relations","“For all” and “there exists”"],["Much reasoning depends on what is inside the statements."],"→","amber","green"),
PT("A first-order structure",[["A domain","The objects.","blue"],["Constants","Named objects.","green"],["Functions","Operations on objects.","purple"],["Predicates","Properties and relations.","amber"]],["A world to talk about."]),
PT("The language",[["Terms","Name objects.","blue"],["Atomic formulas","A predicate applied to terms.","green"],["Connectives","As before.","purple"],["Quantifiers","∀ for all, ∃ there exists.","amber"]],["Built inductively, like propositional formulas."]),
VS("The evaluation game","The verifier",["Tries to show the formula true","Chooses for ∃ and “or”"],"The falsifier",["Tries to show it false","Chooses for ∀ and “and”"],["The formula is true exactly when the verifier has a winning strategy."],"VS","green","red"),
RC("Sections 3.1–3.2",[["Structure","Domain and meaning."],["Terms","Name objects."],["Predicates","Say things."],["Quantifiers","All and some."],["Assignments","Give variables values."],["Game","Tests truth."]])
]});
//@@ ch10-using-first-order
CH({slug:"ch10-using-first-order",n:"10",part:"Chapter 3 · First-order logic",sub:"Translating, substituting and negating.",end:"Restrict “all” with if. Restrict “some” with and.",scenes:[
VS("The golden rule","“All circles are red”",["∀x (Circle(x) → Red(x))"],"“Some circle is red”",["∃x (Circle(x) ∧ Red(x))"],["Swap the connectives, and the meaning is wrong."],"and","blue","green"),
VS("Free and bound variables","Bound",["Within the scope of a quantifier","A placeholder"],"Free",["Not bound","The formula says something about it"],["A sentence has no free variables."],"VS","blue","amber"),
VS("Variable capture","Unsafe substitution",["A term’s variable falls under a quantifier","The meaning changes"],"Safe",["Rename the bound variable first"],["Substitute only terms that are free for the variable."],"→","red","green"),
PT("Negating quantified statements",[["Not for all","Becomes there exists not.","blue"],["Not there exists","Becomes for all not.","green"],["Push inward","Flipping each quantifier.","purple"],["Then","Negate the inner formula.","amber"]],["“Not everyone passed” means “someone did not pass”."]),
RC("Sections 3.3–3.4",[["Translate","With care."],["All","Uses if."],["Some","Uses and."],["Scope","Bound and free."],["Capture","Avoid it."],["Negation","Flips quantifiers."]])
]});
//@@ ch11-syllogisms
CH({slug:"ch11-syllogisms",n:"11",part:"Chapter 3 · First-order logic",sub:"Aristotle’s logic, seen from first-order logic.",end:"Four sentence types, and the arguments built from them.",scenes:[
PT("Aristotle’s four sentence types",[["A","All S are P.","blue"],["E","No S are P.","green"],["I","Some S are P.","purple"],["O","Some S are not P.","amber"]],["Universal or particular, affirmative or negative."]),
PT("The square of opposition",[["Contradictories","A and O. E and I.","blue"],["Contraries","A and E cannot both be true.","green"],["Subcontraries","I and O cannot both be false.","purple"],["Subalternation","A implies I, if something is an S.","amber"]],["The four types are tied together."]),
VS("A syllogism","Shape",["Two premises, one conclusion","Three terms, each used twice"],"Count",["256 possible forms","Only a small number are valid"],["Mood and figure identify each form."],"and","blue","amber"),
PL("The Venn test",[["Draw","Three overlapping circles."],["Shade","Regions the premises declare empty.","blue"],["Mark","Regions they declare inhabited.","purple"],["Read","Is the conclusion already shown?","green"]],["A finite check behind the drawing."],{tc:"blue"}),
RC("Section 3.5",[["Four types","A, E, I, O."],["Square","How they relate."],["Syllogism","Two premises."],["Forms","256."],["Valid","Only a few."],["Venn","Tests them."]])
]});
//@@ ch12-first-order-deduction
CH({slug:"ch12-first-order-deduction",n:"12",part:"Chapter 4 · First-order deduction",sub:"Extending each proof system with rules for quantifiers.",end:"The same systems, with quantifier rules added.",scenes:[
PT("Four quantifier moves",[["Use a universal","Instantiate it with any term.","blue"],["Prove a universal","Show it for an arbitrary object.","green"],["Use an existential","Name a fresh witness.","purple"],["Prove an existential","Exhibit a term.","amber"]],["Every system has a version of these."]),
VS("Tableau rules","For true ∀ and false ∃",["Instantiate with any term","May be reused"],"For true ∃ and false ∀",["Introduce a new constant","Once"],["The reusable rules are why first-order tableaux may not terminate."],"and","blue","amber"),
VD("Spot the illegal step",[["Generalising over a variable still in an assumption",false,"It is not arbitrary.","ILLEGAL","red"],["Reusing an old name as the witness",false,"The witness must be fresh.","ILLEGAL","red"],["Instantiating a universal with any term",true,"Always allowed.","LEGAL","green"],["Exhibiting a term for an existential",true,"Allowed.","LEGAL","green"]],["The side conditions are where proofs go wrong."],{sw:170}),
VS("What changes","Propositional",["Validity can be decided"],"First-order",["No procedure decides validity in general","A proof exists whenever the formula is valid"],["Deduction is still possible. Deciding is not."],"→","green","amber"),
RC("Sections 4.1–4.3",[["Quantifier rules","Four moves."],["Arbitrary","Means no assumptions."],["Fresh","Witnesses."],["Tableaux","May not end."],["Side conditions","Matter."],["Undecidable","In general."]])
]});
//@@ ch13-first-order-resolution
CH({slug:"ch13-first-order-resolution",n:"13",part:"Chapter 4 · First-order deduction",sub:"Preparing formulas for a machine, and matching them.",end:"Remove the quantifiers, then unify.",scenes:[
PL("To clausal form",[["Prenex","Move quantifiers to the front."],["Skolemise","Replace each ∃ by a function of the ∀ variables before it.","blue"],["Drop ∀","All remaining variables are universal.","purple"],["CNF","A set of clauses.","green"]],["The result is satisfiable exactly when the original is."],{tc:"blue"}),
VS("Skolemisation","Before",["For every x there exists a y with R(x, y)"],"After",["For every x, R(x, f(x))"],["The function f picks the witness for each x."],"→","amber","green"),
PT("Unification",[["Goal","A substitution that makes two literals identical.","blue"],["Most general","Commits to as little as possible.","green"],["Occurs check","A variable cannot be bound to a term containing it.","purple"],["Failure","Different function symbols clash.","amber"]],["What lets resolution work with variables."]),
PT("Strategies",[["Unit preference","Resolve with single-literal clauses first.","blue"],["Set of support","Use the negated goal.","green"],["Subsumption","Discard clauses that are implied.","purple"],["Fairness","Do not starve any clause.","amber"]],["Unrestricted resolution generates far too much."]),
RC("Sections 4.4–4.5",[["Prenex","Quantifiers first."],["Skolem","Functions for witnesses."],["Clauses","With variables."],["Unify","To match."],["Resolve","With unification."],["Strategy","Controls the search."]])
]});
//@@ ch14-soundness-completeness
CH({slug:"ch14-soundness-completeness",n:"14",part:"Chapter 4 · First-order deduction",sub:"Why derivability and truth coincide, and what follows.",end:"What can be derived is exactly what is valid.",scenes:[
VS("Two sides of the story","Soundness",["If it can be derived, it is a consequence","Proved by induction on derivations"],"Completeness",["If it is a consequence, it can be derived","The hard direction"],["Together: ⊢ and ⊨ coincide."],"and","green","blue"),
PL("Completeness, in outline",[["Suppose","A cannot be derived."],["Extend","The theory to a maximal consistent one.","blue"],["Build","A model out of the syntax itself.","purple"],["That model","Makes the theory true and A false.","green"]],["A model made of terms."],{tc:"blue"}),
VS("Compactness","A derivation",["Uses finitely many premises"],"So",["If every finite part of a theory has a model, the whole does"],["Infinity from finite pieces."],"→","blue","purple"),
VS("The limits","Semi-decidable",["A valid formula will eventually be proved"],"Not decidable",["An invalid one may run for ever"],["Herbrand structures reduce first-order questions to propositional ones, without removing this limit."],"and","green","amber"),
RC("Section 4.6",[["Sound","Derivable means valid."],["Complete","Valid means derivable."],["Model","Built from syntax."],["Compact","Finite suffices."],["Herbrand","Term models."],["Limit","Validity is undecidable."]])
]});
//@@ ch15-proofs-and-sets
CH({slug:"ch15-proofs-and-sets",n:"15",part:"Chapter 5 · Applications",sub:"How mathematical proofs are structured, and the language they are written in.",end:"A proof has a global shape and local moves.",scenes:[
PT("Proof strategies",[["Direct","Assume the premises, reach the goal.","blue"],["Contraposition","Prove “not B implies not A”.","green"],["Contradiction","Assume the negation, reach absurdity.","purple"],["Cases","Split, and prove each.","amber"]],["The global shape of a proof."]),
VS("Tactics","From the goal",["“For all”: take an arbitrary one","“If”: assume the antecedent"],"From the premises",["“There exists”: name it","“Or”: split into cases"],["What the goal and the premises tell you to do."],"and","blue","green"),
PT("Functions",[["Injective","Different inputs, different outputs.","blue"],["Surjective","Every output is reached.","green"],["Bijective","Both.","purple"],["Inverse","Exists exactly for bijections.","amber"]],["Sets are the language. Functions connect them."]),
PT("Relations",[["Reflexive","Everything relates to itself.","blue"],["Symmetric","If a to b, then b to a.","green"],["Transitive","Chains collapse.","purple"],["Equivalence","All three.","amber"],["Order","Reflexive, antisymmetric, transitive.","red"]],["Equivalences partition a set. Orders arrange it."]),
RC("Sections 5.1–5.2",[["Strategies","Four shapes."],["Tactics","From goal and premises."],["Sets","The language."],["Functions","Injective, surjective."],["Equivalence","Partitions."],["Orders","Arrange."]])
]});
//@@ ch16-induction-peano
CH({slug:"ch16-induction-peano",n:"16",part:"Chapter 5 · Applications",sub:"Induction on the natural numbers, and arithmetic as a formal theory.",end:"The domino principle.",scenes:[
PL("Induction",[["Base","P holds for 0."],["Step","If P holds for n, it holds for n + 1.","blue"],["Conclusion","P holds for every natural number.","green"]],["Knock over the first domino, and show each knocks over the next."],{tc:"blue"}),
PT("Equivalent versions",[["Ordinary induction","From n to n + 1.","blue"],["Strong induction","From all smaller numbers to n.","green"],["Least number principle","Every non-empty set has a least element.","purple"],["Infinite descent","No endless decreasing chain.","amber"]],["They can each be derived from the others."]),
VS("Spot the flaw: all horses are one colour","The argument",["Any n horses are one colour, so any n + 1 are"],"The flaw",["The step fails from one horse to two","The two groups do not overlap"],["The step must hold for every n, including the smallest."],"→","amber","red"),
PT("Peano Arithmetic",[["Zero","Is a number.","blue"],["Successor","Every number has one.","green"],["Addition and multiplication","Defined by recursion.","purple"],["Induction","An axiom for every formula.","amber"]],["Arithmetic as a first-order theory."]),
RC("Section 5.3",[["Induction","Base and step."],["Strong","All smaller."],["Least element","Equivalent."],["Horses","Check the step."],["Peano","Axioms for arithmetic."],["Scheme","One axiom per formula."]])
]});
//@@ ch17-automated-reasoning
CH({slug:"ch17-automated-reasoning",n:"17",part:"Chapter 5 · Applications",sub:"Machines that prove, and a language built on resolution.",end:"A program is a set of clauses.",scenes:[
VS("Automated and interactive proving","Automated",["The machine searches for a proof alone"],"Interactive",["A person guides","The machine checks each step"],["Both are used to verify software and mathematics."],"and","blue","purple"),
PT("Logic programming",[["Facts","What is true.","blue"],["Rules","What follows from what.","green"],["Queries","Questions to answer.","purple"],["Answers","Substitutions that make the query true.","amber"]],["In Prolog, the program is the knowledge, and running it is proving."]),
PL("How Prolog runs",[["Take","The first goal."],["Unify","It with the head of a clause.","blue"],["Replace","The goal with that clause’s body.","purple"],["Fail?","Backtrack to the last choice.","amber"],["No goals left","Success.","green"]],["Resolution with a fixed strategy: top to bottom, left to right."],{tc:"blue"}),
VS("Negation as failure","Classical negation",["Not A is true"],"Negation as failure",["A could not be proved","So assume it false"],["It rests on a closed world: what is not known is taken to be false."],"VS","blue","amber"),
RC("Section 5.4",[["Provers","Automated or interactive."],["Clauses","Are programs."],["Unify","To call."],["Backtrack","To search."],["Negation","As failure."],["Closed world","The assumption."]])
]});
