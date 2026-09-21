# RL without Tears: An Introduction in the Era of LLMs

Reinforcement learning (RL) has become an important training paradigm for large language models (LLMs). It is widely used for preference alignment, reasoning, and agentic learning from interaction and feedback. At its core, RL studies how an agent improves its behavior by interacting with an environment and receiving rewards. A standard objective is

```math
\max_{\pi} \; \mathbb{E}_{\tau \sim \pi}
\left[
\sum_{t=0}^{T} r_t
\right]
```

where $\pi$ denotes the policy, $\tau$ denotes a trajectory, and $r_t$ is the reward received at step $t$.

For LLMs, this formulation has a natural interpretation. The LLM acts as the agent. Its next-token distribution defines the policy. Generated tokens correspond to actions, and the complete response forms a trajectory. Reward signals are then used to evaluate the quality of the generated output.

Although RL is becoming increasingly important for LLMs, many of its concepts remain unfamiliar to researchers with a background in NLP and supervised learning. Traditional RL literature often explains these concepts through robotics, control, or game-playing tasks. This makes it difficult to directly connect RL formulations with modern LLM training. This gap motivates **RL without Tears: An Introduction in the Era of LLMs**.

In this paper, we introduce RL from the perspective of LLM research. We explain key concepts and algorithms through LLM-oriented examples, including policy gradients, advantage estimation, importance sampling, PPO, and reward modeling. We then discuss recent advances in RL for LLMs. We further extend the discussion to reasoning models, LLM-based agents, and multimodal models.

We aim to make RL easier to understand for the LLM community. Rather than relying on traditional control examples, we use terminology and examples that are familiar to LLM researchers. We hope this paper provides an accessible introduction to RL and helps readers better understand and apply RL techniques in modern foundation models.

## Website

A simple way to access this work is through its [Online Website](https://niutrans.github.io/RL-without-Tears-site/)

## PDFs

- [Full PDF](rl-without-tears.pdf)
- [Chapter 1: Introduction](chapter/chapter-01-introduction.pdf)
- [Chapter 2: Preliminary](chapter/chapter-02-preliminary.pdf)
- [Chapter 3: Understanding RL in LLM Training](chapter/chapter-03-understanding-rl-in-llm-training.pdf)
- [Chapter 4: Improved RL for LLMs](chapter/chapter-04-improved-rl-for-llms.pdf)
- [Chapter 5: RL for LLM Reasoning](chapter/chapter-05-rl-for-llm-reasoning.pdf)
- [Chapter 6: Agentic RL](chapter/chapter-06-agentic-rl.pdf)
- [Chapter 7: Multimodal RL](chapter/chapter-07-multimodal-rl.pdf)
- [Chapter 8: Conclusions and Future Directions](chapter/chapter-08-conclusions-and-future-directions.pdf)
- [Appendix: Datasets and Systems](chapter/appendix-datasets-and-systems.pdf)

Each chapter PDF is compiled independently and includes its own bibliography.

## Citation

```bibtex
@misc{wang2026rlwithouttears,
  title  = {RL without Tears: An Introduction in the Era of LLMs},
  author = {Wang, Chenglong and Zhou, Hang and Liu, Tongran and Zhu, Jingbo and Xiao, Tong},
  year   = {2026},
  note   = {Tutorial manuscript}
}
```

## License

This work is released under the CC-BY 4.0 license.

## Contact

For questions or suggestions, please contact Chenglong Wang at `WANGCHENGLONG@MAIL.NEU.EDU.CN`.
